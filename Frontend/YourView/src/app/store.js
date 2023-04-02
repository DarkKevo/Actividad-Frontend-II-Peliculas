import { configureStore } from "@reduxjs/toolkit";
import peliculaReducer from '../features/Peliculas/PeliculaSlice'

export const store = configureStore({
  reducer: {
    pelicula: peliculaReducer,
  },
});
