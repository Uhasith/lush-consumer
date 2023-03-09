import Routing from "src/routes";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { FarmProvider } from "./context/FarmContext";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <FarmProvider>
      <CartProvider>
        <Routing />
      </CartProvider>
    </FarmProvider>
  );
};

export default App;
