import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const peliculaSlice = createSlice({
  name: 'pelicula',
  initialState:{
    movies :[]
  },
  reducers: {
    updateMovie : (state, action)=>{
      state.movies = action.payload;
    }
  },
})

export const {updateMovie} = peliculaSlice.actions;

export default peliculaSlice.reducer

export const GetAllMovies = ()=>(dispatch)=>{
  axios.get('http://localhost:3000/GetMovies').then((response)=>{
    dispatch(updateMovie(response.data))
  }).catch((error)=>{
    console.log(error)
  })

}