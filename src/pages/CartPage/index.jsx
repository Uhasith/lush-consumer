import { useState } from "react";
import { CartTab, Cart, CartForm, CartCheckout } from "src/components";

const CartPage = () => {
  const [selectedTab, setSelectedTab] = useState("CART");

  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
  };

  const renderTab = () => {
    switch (selectedTab) {
      case "CART":
        return <Cart handleTabChange={handleTabChange} />;
      case "SHIPPING INFORMATION":
        return <CartForm handleTabChange={handleTabChange} />;
      case "PAYMENT":
        return <CartCheckout handleTabChange={handleTabChange} />;
      default:
        return <Cart handleTabChange={handleTabChange} />;
    }
  };

  return (
    <>
      <div className="container">
        <CartTab
          onChangeTab={(tabName) => handleTabChange(tabName)}
          chosenTab={selectedTab}
        />
        {renderTab()}
      </div>
    </>
  );
};

export default CartPage;
