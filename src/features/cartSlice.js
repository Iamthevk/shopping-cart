import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addProduct: (state,action) => {
            const existingProduct = state.cart.find((product) => product.id === action.payload.id);
            if(existingProduct){
                existingProduct.quantity++
            }else{
              state.cart.push({...action.payload, quantity: 1 })  
            }
        }
    }
})
const cartCountSelector = (state) =>  state.cart.reduce((total,product) => total + product.quantity, 0)
const cartReducer = cartSlice.reducer
const {addProduct} = cartSlice.actions
export  {addProduct,cartReducer,cartCountSelector}