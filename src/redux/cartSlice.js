 



import { createSlice } from "@reduxjs/toolkit";

const initState = {
  cartItems: [],
  totalPrice: 0,
  isLoading: false,
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    addToCart: (state, action) => {
      const exist = state.cartItems.find((item) => item.id === action.payload.id);
      if (exist) {
    
                exist.qty++;

       } else {
    state.cartItems.push({ ...action.payload, qty: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const exist = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (exist.qty === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        exist.qty -= 1;
      }
    },

    getTotalPrice: (state) => {
      state.totalPrice = state.cartItems.reduce(
        (a, c) => a + c.price * c.qty,
        0
      );
      
 
      
    },
  },
});

export const { addToCart, removeFromCart, getTotalPrice } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;














