import { useState } from "react";
import { CartTab, Cart, CartForm, CartCheckout } from "src/components";
import {AuthModal}  from "../../components";


const CartPage = () => {
  const [selectedTab, setSelectedTab] = useState("CART");
  const [mustAuthenticate, setMustAuthenticate] = useState(false);
  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
  };

  const openModal = () => {
    document.getElementById("my-modal-4").checked = true;
  }

  const renderTab = () => {

    switch (selectedTab) {
      case "CART":
        return <Cart handleTabChange={handleTabChange} setMustAuthenticate={setMustAuthenticate} />;
      case "SHIPPING INFORMATION":
        return <CartForm handleTabChange={handleTabChange} />;
      case "PAYMENT":
        return <CartCheckout handleTabChange={handleTabChange} />;
      default:
        return <Cart handleTabChange={handleTabChange} setMustAuthenticate={setMustAuthenticate} />;
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
      {mustAuthenticate &&  openModal()}
      <AuthModal />
    </>
  );
};

export default CartPage;
