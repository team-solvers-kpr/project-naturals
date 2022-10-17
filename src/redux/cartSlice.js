import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const { payload } = action;
            const { cartProduct } = payload;

            const isItemInCart = state.find((item) => item._id === cartProduct._id)

            if (isItemInCart) {
                return state.map(item => item._id === cartProduct._id ? { ...item, ...cartProduct } : item)
            }
            else {
                return [...state, { ...cartProduct }]
            }
        },
        deleteFromCart: (state, action) => {
            const { payload } = action
            return state.filter((item) => item._id !== payload._id)
        },
        reset: () => initialState

    }
})

export const { addToCart, deleteFromCart, reset } = cartSlice.actions;

export const selectCartLength = state => state.cart.length;
export const selectCart = state => state.cart;
export const selectTotalAmount = state => state.cart.reduce((acc, item) => acc + item.quantityPrice, 0)
export const selectTotalItems = state => state.cart.reduce((acc, item) => acc + item.amount, 0)
export default cartSlice.reducer