import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/ProductSlice";
import cartReducer from "../features/CartSlice";
import wishlistReducer from "../features/WishListSlice";
import authReducer from "../features/AuthSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
