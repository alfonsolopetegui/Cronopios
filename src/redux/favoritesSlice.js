// favoritesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const productToAdd = action.payload;
      const existingProductIndex = state.findIndex(product => product.id === productToAdd.id);
    
      if (existingProductIndex !== -1) {
        // Si el producto ya está en la lista de favoritos, quítalo
        state.splice(existingProductIndex, 1);
      } else {
        // Si no está en la lista de favoritos, agrégalo
        state.push(productToAdd);
      }
    },
    removeFavorite: (state, action) => {
      const productIdToRemove = action.payload;
      return state.filter((product) => product.id !== productIdToRemove);
    },
    clearFavorites: (state) => {
      state.length = 0;
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
