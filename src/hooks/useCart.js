import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const useFarm = () => useContext(CartContext);

export default useFarm;
