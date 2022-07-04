import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import productsReducer from "./productsSlice";
import wishlistReducer from "./wishlistSlice"
import transactionReducer from "./transactionSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productsReducer,
        wishlist: wishlistReducer,
        transaction: transactionReducer
    },
});
