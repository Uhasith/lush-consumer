import { useContext } from "react";
import { FarmContext } from "../context/FarmContext";

const useFarm = () => useContext(FarmContext);

export default useFarm;
