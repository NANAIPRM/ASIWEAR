import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/slice/auth-slice";
import productReducer from "../features/slice/product-slice";
import cartReducer from "../features/slice/cart-slice";
import orderReducer from "../features/slice/order-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;
