import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "src/hooks";
import { request } from "src/request";
import { isEmpty } from "lodash";

const CashOnDeliverySuccessPage = () => {
  const navigate = useNavigate();
  const { orderConfirmData } = useCart();

  useEffect(() => {
    if (!isEmpty(orderConfirmData)) {
      handleSubmitPayment();
    }
  }, []);

  const handleSubmitPayment = async () => {
    try {
      await request("POST", `/v1/orders`, orderConfirmData);

      localStorage.removeItem("subTotal");
      localStorage.removeItem("orderConfirmData");
      localStorage.removeItem("items");
      window.location.reload();
    } catch (err) {}
  };

  const handleContinueShopping = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-sm rounded-lg shadow-lg bg-white px-8 py-10">
        <div className="text-green-500 text-6xl mb-8 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8.293 15.707a1 1 0 01-1.414 0L3.586 12.5a1 1 0 011.414-1.414l2.293 2.293 6.293-6.293a1 1 0 011.414 1.414l-7 7z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M10 20A10 10 0 110 10a10 10 0 0110 10zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h1 className="text-3xl text-gray-800 font-medium mb-4 text-center">
          Order Placed
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Thank you for your order! We have received your request and it will be
          processed shortly. You will be contacted by our team for confirmation
          and delivery details.
        </p>
        <button
          className="bg-[#097435] hover:bg-[#6CB33F] text-white font-semibold py-2 px-4 rounded w-full"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CashOnDeliverySuccessPage;
