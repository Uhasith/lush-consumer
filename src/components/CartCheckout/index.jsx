import { useState } from "react";
import { useNavigate } from "react-router";

const CartCheckout = ({ handleTabChange }) => {
  const [method, setMethod] = useState("pay-online");
  const navigate = useNavigate();
  const handlePaymentMethodChange = (method) => {
    setMethod(method);
  };

  const handleRedirection = () => {
    navigate(`/payment/${method}`);
  };

  return (
    <div className="flex flex-col pb-48">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold">Payment </h2>
        <h2 className="text-[#4B5157]">Please choose a payment method </h2>
      </div>
      <div className="flex flex-col py-8 w-3/4">
        <div className="flex flex-col p-4 rounded-xl bg-[#F5F5F5]">
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <input
                type="radio"
                name="radio-2"
                className="radio checked:bg-[#4592FF]"
                onChange={() => handlePaymentMethodChange("pay-online")}
                checked={method == "pay-online"}
              />
              <p className="font-bold">Pay now</p>
            </div>
            <div>
              <img
                src="https://i.ibb.co/7r3Ygxq/Logo-1.png"
                alt="credit-card-img"
              />
            </div>
          </div>
          <div className="flex w-3/4 pl-9 pt-3">
            <p className="text-[14px] text-[#4B5157]">
              Safe money transfer using your bank account. Safe payment metod.
              Visa, MasterCard, Maestro, Discover, American Express.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col py-2 w-3/4">
        <div className="flex flex-col p-4 rounded-xl bg-[#F5F5F5]">
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <input
                type="radio"
                name="radio-2"
                className="radio checked:bg-[#4592FF]"
                onChange={() => handlePaymentMethodChange("cash-on-delivery")}
                checked={method == "cash-on-delivery"}
              />
              <p className="font-bold">Cash On delivery</p>
            </div>
            <div>
              <img
                src="https://i.ibb.co/dJkBKFd/cash-on-delivery.png"
                alt="credit-card-img"
                width={32}
              />
            </div>
          </div>
          <div className="flex w-3/4 pl-9 pt-3">
            <p className="text-[14px] text-[#4B5157]">
              Safe payment online. Credit card needed. PayPal account is not
              necessary.
            </p>
          </div>
        </div>
      </div>

      <hr className="mt-6" />
      <div className="flex justify-between mt-8  w-3/4">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleTabChange("SHIPPING INFORMATION")}
        >
          <svg
            width="15"
            height="7"
            viewBox="0 0 15 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 3V4H4V7L0 3.5L4 0V3H15Z"
              fill="#BCBFC2"
            />
          </svg>

          <p className="text-[#939699] font-bold">
            Back to Shipping information
          </p>
        </div>
        <div>
          <button
            class="btn bg-[#097435] border-none normal-case rounded-full h-[40px] w-[180px] gap-3"
            onClick={handleRedirection}
          >
            <p className="white">Continue</p>
            <svg
              width="15"
              height="7"
              viewBox="0 0 15 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 3V4H11V7L15 3.5L11 0V3H0Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
