import { useCart } from "src/hooks";

const CartTab = ({ onChangeTab, chosenTab }) => {
  const { items } = useCart();
  const handleSelectTab = (tabName) => {
    items?.length > 0 && onChangeTab(tabName);
  };

  return (
    <div className="flex flex-col py-8">
      <div className="flex gap-4 items-center justify-center">
        <div
          className={`flex cursor-pointer ${
            chosenTab == "CART" && " border-[#6CB33F] border-t-4"
          }`}
          onClick={() => handleSelectTab("CART")}
        >
          <h2 className="font-bold text-[14px]">CART</h2>
        </div>
        <div
          className={`flex cursor-pointer ${
            chosenTab == "SHIPPING INFORMATION" &&
            " border-[#6CB33F] border-t-4"
          }`}
          onClick={() => handleSelectTab("SHIPPING INFORMATION")}
        >
          <h2 className="font-bold text-[14px]">SHIPPING INFORMATION</h2>
        </div>
        <div
          className={`flex cursor-pointer ${
            chosenTab == "PAYMENT" && " border-[#6CB33F] border-t-4"
          }`}
          onClick={() => handleSelectTab("PAYMENT")}
        >
          <h2 className="font-bold text-[14px]">PAYMENT</h2>
        </div>
      </div>
      <hr className="my-6" />
    </div>
  );
};
export default CartTab;
