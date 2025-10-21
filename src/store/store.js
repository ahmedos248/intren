import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from '../features/wishlist/wishlistSlice';
import productsReducer from '../store/productsSlice';
import searchReducer from "./searchSlice";
export const store = configureStore({
    reducer: {
        wishlist: wishlistReducer,
        products: productsReducer,
        search: searchReducer,
        cart: require('./cartSlice').default,
        user: require('./userSlice').default,
    },
});
