import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = action.payload;
            const existingItem = state.products.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += item.price;
            } else {
                state.products.push({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    quantity: 1,
                    totalPrice: item.price,
                    image: item.image || (item.images && item.images[0]),
                });
            }
            state.totalPrice += item.price;
            state.totalQuantity++;
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.products.find((i) => i.id === id);
            if (existingItem) {
                state.products = state.products.filter((i) => i.id !== id);
                state.totalQuantity -= existingItem.quantity;
                state.totalPrice -= existingItem.price * existingItem.quantity;
            }
        },
        clearCart(state) {
            state.products = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
