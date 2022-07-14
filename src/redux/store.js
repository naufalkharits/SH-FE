import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import productsReducer from "./productsSlice"
import categoriesReducer from "./categoriesSlice"
import wishlistReducer from "./wishlistSlice"
import transactionReducer from "./transactionSlice"
import notificationReducer from "./notificationSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productsReducer,
        categories: categoriesReducer,
        wishlist: wishlistReducer,
        transaction: transactionReducer,
        notification: notificationReducer,
    },
})
