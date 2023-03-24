import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { request } from "src/request";
import CheckoutForm from "./CheckoutForm";
import { useCart } from "src/hooks";

function Payment() {
  const { orderConfirmData } = useCart();

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    (async function createPaymentIntent() {
      const { publishableKey } = await request("GET", `/v1/payment/config`);
      setStripePromise(loadStripe(publishableKey));
    })();
  }, []);

  useEffect(() => {
    (async function createPaymentIntent() {
      const { clientSecret } = await request(
        "POST",
        `/v1/payment/create-payment-intent`,
        { amount: Number(orderConfirmData?.totalPrice) }
      );
      setClientSecret(clientSecret);
    })();
  }, []);

  return (
    <>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
