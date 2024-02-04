import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import booksReducer from "./booksSlice";
import cartReducer from "./cartSlice";
import favoritesReducer from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    books: booksReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});

export default store;
