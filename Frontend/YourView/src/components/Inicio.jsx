import Cards from './Cards';
import Agregar from './Agregar';
import { useSelector, useDispatch } from 'react-redux';
import { GetAllMovies } from '../features/Peliculas/PeliculaSlice';
import { useEffect } from 'react';
function Inicio() {
  const dispatch = useDispatch();

  function Log_Out2() {
    localStorage.removeItem('currentUser');
  }

  window.onbeforeunload = function () {
    Log_Out2();
    window.location.href = '/'
  };

  useEffect(() => {
    dispatch(GetAllMovies());
  }, [dispatch]);

  if (localStorage.getItem('currentUser') === null) {
    return (
      <h2>No tienes una sesion</h2>
    )
  }

  let peliculas = useSelector((state) => state.pelicula.movies);

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-black dark:bg-opacity-90 bg-opacity-70 flex flex-wrap items-center justify-evenly p-5 '>
      {peliculas.map((x) => (
        <Cards titulo={x.Titulo} img={x.Imagen} id={x.idPelicula} />
      ))}
      <Agregar />
    </div>
  );
}

export default Inicio;
