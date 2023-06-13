import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/slice/auth-slice";
import productReducer from "../features/auth/slice/product-slice";
import cartReducer from "../features/auth/slice/cart-slice";
import orderReducer from "../features/auth/slice/order-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;
