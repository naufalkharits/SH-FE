import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import productsReducer from "./productsSlice";
import wishlistReducer from "./wishlistSlice";
import transactionReducer from "./transactionSlice";
import categoriesReducer from "./categoriesSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productsReducer,
        categories: categoriesReducer,
        wishlist: wishlistReducer,
        transaction: transactionReducer,
    },
});
