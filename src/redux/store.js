import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import categoriesReducer from "./categoriesSlice"
import notificationReducer from "./notificationSlice"
import productsReducer from "./productsSlice"
import transactionReducer from "./transactionSlice"
import wishlistReducer from "./wishlistSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    categories: categoriesReducer,
    wishlist: wishlistReducer,
    transaction: transactionReducer,
    notification: notificationReducer,
  },
  devTools: false,
})
