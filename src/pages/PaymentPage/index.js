import { useParams } from "react-router";
import { CashOnDelivery, OnlinePay } from "src/components/Payment";

const PaymentPage = () => {
  const { paymentMethod } = useParams();

  return (
    <div className="container h-screen">
      {paymentMethod == "pay-online" ? <OnlinePay /> : <CashOnDelivery />}
    </div>
  );
};

export default PaymentPage;
