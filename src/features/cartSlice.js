import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    removeProduct:(state,action) => {
        const existingProduct = state.cart.find(
            (product) => product.id === action.payload.id
          );
          if (existingProduct) {
            existingProduct.quantity--;
          } else {
            return state.cart.quantity
          }
          localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    clearProduct: (state, action) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      state.cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
  },
});
const cartCountSelector = (state) =>
  state.cart.reduce((total, product) => total + product.quantity, 0);
const cartReducer = cartSlice.reducer;
const { addProduct, removeProduct,clearProduct } = cartSlice.actions;
export { addProduct, removeProduct,clearProduct, cartReducer, cartCountSelector };
