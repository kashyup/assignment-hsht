import React, { createContext, useContext, useReducer } from 'react';

const ShopContext = createContext();

const initialState = {
  cart: [],
  wishlist: []
};

const shopReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity
              }
            : item
        )
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = item => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const increaseQuantity = id => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: id });
  };

  const decreaseQuantity = id => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: id });
  };

  const removeFromCart = id => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  return (
    <ShopContext.Provider
      value={{ cart: state.cart, wishlist: state.wishlist, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
