import Cards from './Cards';
import Agregar from './Agregar';
import { FaGrinBeamSweat } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { GetAllMovies } from '../features/Peliculas/PeliculaSlice';
import { useEffect } from 'react';
function Inicio() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllMovies());
  }, [dispatch]);

  if (localStorage.getItem('currentUser') === null) {
    return <h2>No tienes una sesion</h2>;
  }

  let peliculas = useSelector((state) => state.pelicula.movies);

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-black dark:bg-opacity-90 bg-opacity-70 flex flex-wrap items-center justify-evenly p-5 '>
      <h1 className={peliculas.length==0 ? 'flex items-center justify-center gap-5 text-3xl':'hidden'}>Parece que no haz agregado peliculas aun <FaGrinBeamSweat/></h1>
      {peliculas.map((x) => (
        <Cards titulo={x.Titulo} img={x.Imagen} id={x.idPelicula} />
      ))}
      <Agregar />
    </div>
  );
}

export default Inicio;
