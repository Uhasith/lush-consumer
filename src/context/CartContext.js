import { createContext, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import PropTypes from "prop-types";
import _ from "lodash";

const initialState = {
  items: [],
  subTotal: 0,
  onItemAdd: () => {},
  onItemIncrement: () => {},
  onItemDecrement: () => {},
  onItemRemove: () => {},
};

const CartContext = createContext(initialState);

CartProvider.propTypes = {
  children: PropTypes.node,
};

function CartProvider({ children }) {
  const [items, setItems] = useLocalStorage("items", initialState.items);
  const [subTotal, setSubTotal] = useLocalStorage(
    "subTotal",
    initialState.subTotal
  );

  useEffect(() => {
    handleTotalPriceUpdate();
  }, [items]);

  const handleItemAdd = (item) => {
    const foundIndex = items.findIndex(
      (existingItem) => existingItem?.id === item?.id
    );

    if (foundIndex > -1) {
      const _items = [...items];

      _items[foundIndex].qty = _items[foundIndex].qty + 1;
      _items[foundIndex].totalPrice =
        _items[foundIndex].price * _items[foundIndex].qty;
      setItems(_items);
    } else {
      setItems((prevItems) => [...prevItems, item]);
    }
  };

  const handleItemIncrement = (item) => {
    const foundIndex = items.findIndex(
      (existingItem) => existingItem?.id === item?.id
    );

    if (foundIndex > -1) {
      const _items = [...items];

      _items[foundIndex].qty = _items[foundIndex].qty + 1;
      _items[foundIndex].totalPrice =
        _items[foundIndex].price * _items[foundIndex].qty;
      setItems(_items);
    }
  };

  const handleItemDecrement = (item) => {
    const foundIndex = items.findIndex(
      (existingItem) => existingItem?.id === item?.id
    );

    if (foundIndex > -1) {
      const _items = [...items];
      if (_items[foundIndex].qty == 1) return handleItemRemove(item);
      _items[foundIndex].qty = _items[foundIndex].qty - 1;
      _items[foundIndex].totalPrice =
        _items[foundIndex].price * _items[foundIndex].qty;
      setItems(_items);
    }
  };

  const handleItemRemove = (item) => {
    const foundIndex = items.findIndex(
      (existingItem) => existingItem?.id === item?.id
    );
    if (foundIndex > -1) {
      const _items = [...items];

      const filteredItems = _items.filter((_item) => _item.id !== item?.id);
      setItems(filteredItems);
    }
  };

  const handleTotalPriceUpdate = () => {
    const _subTotal = _.sumBy(items, (obj) => parseInt(obj.totalPrice));
    setSubTotal(_subTotal);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        subTotal,
        onItemAdd: handleItemAdd,
        onItemDecrement: handleItemDecrement,
        onItemIncrement: handleItemIncrement,
        onItemRemove: handleItemRemove,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
