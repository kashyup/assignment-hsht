import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'ADD_TO_WISHLIST':
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const initialState = { cart: [], wishlist: [] };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const addToWishlist = (product) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const removeFromWishlist = (product) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart, addToWishlist, removeFromCart, removeFromWishlist }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
