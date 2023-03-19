import Cards from "./Cards";
import Agregar from "./Agregar";
import { useSelector, useDispatch } from "react-redux";
import { GetAllMovies } from "../features/Peliculas/PeliculaSlice";
import { useEffect } from "react";
function Inicio() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllMovies());
  }, [dispatch]);
  
  let peliculas = useSelector((state)=>state.pelicula.movies)
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black dark:bg-opacity-90 bg-opacity-70 flex flex-wrap items-center justify-evenly p-5 ">
        {peliculas.map((x)=>(<Cards titulo={x.Titulo} img={x.Imagen}/>))}
      <Agregar />
      <Cards/>
    </div>
  );
}

export default Inicio;
