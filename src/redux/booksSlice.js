import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    product_name: "Rayuela - Julio Cortázar",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/proyecto-libreria-22941.appspot.com/o/Libros%2FRayuela.jpg?alt=media&token=254e1c5f-8ed0-47ed-b908-fed605310547",
    price: 6500,
    category: "novela",
  },
  {
    id: 2,
    product_name: "Paula - Isabel Allende",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/proyecto-libreria-22941.appspot.com/o/Libros%2FPaula-de-Isabel-Allende.jpg?alt=media&token=dbb22a8a-a0d2-4c9e-b4e1-107ed57091b0",
    price: 5000,
    category: "novela",
  },
  {
    id: 3,
    product_name: "El Flaco - Feinmann, Jose Pablo",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/proyecto-libreria-22941.appspot.com/o/Libros%2Fel-flaco_9789504925491.jpg?alt=media&token=659319af-39a8-46eb-9cc7-0042d24aa56a",
    price: 7900,
    category: "filosofia",
  },
];

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export default booksSlice.reducer;
