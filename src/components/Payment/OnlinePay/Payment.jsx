import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { request } from "src/request";
import CheckoutForm from "./CheckoutForm";

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    (async function anyNameFunction() {
      const { publishableKey } = await request("GET", `/v1/payment/config`);
      setStripePromise(loadStripe(publishableKey));
    })();
  }, []);

  useEffect(() => {
    //   fetch("/create-payment-intent", {
    //     method: "POST",
    //     body: JSON.stringify({}),
    //   }).then(async (result) => {
    //     var { clientSecret } = await result.json();
    //     setClientSecret(clientSecret);
    //   });
    (async function anyNameFunction() {
      const { clientSecret } = await request(
        "POST",
        `/v1/payment/create-payment-intent`
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
