import PropTypes from "prop-types";
import { createContext, useState } from "react";
import _ from "lodash";

const initialState = {
  farms: [],
  products: [],
  currentFarm: {},
  onFarmChange: () => {},
  onProductChange: () => {},
};

const FarmContext = createContext(initialState);

FarmProvider.propTypes = {
  children: PropTypes.node,
};

function FarmProvider({ children }) {
  const [farms, setFarms] = useState(initialState.farms);
  const [products, setProducts] = useState(initialState.products);
  const [currentFarm, setCurrentFarm] = useState(initialState.currentFarm);

  const handleFarmChange = (items) => {
    if (items?.length > 0) {
      setFarms(items);
      setCurrentFarm(items[0]);
    } else {
      setFarms([]);
    }
  };

  const handleProductChange = (items) => {
    if (items?.length > 0) {
      setProducts(items);
    } else {
      setProducts([]);
    }
  };

  const handleCurrentFarmSelect = (farm) => {
    setCurrentFarm(farm);
  };
  return (
    <FarmContext.Provider
      value={{
        farms,
        products,
        currentFarm,
        onFarmChange: handleFarmChange,
        onCurrentFarmSelect: handleCurrentFarmSelect,
        onProductChange: handleProductChange,
      }}
    >
      {children}
    </FarmContext.Provider>
  );
}

export { FarmProvider, FarmContext };
