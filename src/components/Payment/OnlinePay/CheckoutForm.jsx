import { useState } from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    const { paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",

      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    navigate({
      pathname: "/success",
      search: `?paymentIntent=${paymentIntent?.id}&amount=${paymentIntent?.amount}`,
    });

    if (!paymentIntent) {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <form
      id="payment-form"
      className="flex flex-col gap-4 mt-10"
      onSubmit={handleSubmit}
    >
      <PaymentElement id="payment-element" />

      <button
        class="btn bg-[#097435] border-none normal-case rounded-full h-[40px] w-[180px] gap-3"
        disabled={isProcessing || !stripe || !elements}
        id="submit"
      >
        <span id="button-text" className="text-white">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>

      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
