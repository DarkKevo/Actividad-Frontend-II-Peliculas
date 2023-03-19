import { Link } from "react-router-dom";
import Reviews from "./Reviews";
import Editar from "./Edit";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GetAllMovies } from "../features/Peliculas/PeliculaSlice";
import { useEffect } from "react";

function Pelicula() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllMovies());
  }, [dispatch]);

  let peliculas = useSelector((state) => state.pelicula.movies);
  let target = useParams();

  const result = peliculas.filter(x => x.idPelicula == target.id)
  console.log(result[0]);

  /*   axios.get(`http://localhost:3000/Single/${target.id}`)
    .then((response) => {
      objectfilter = response.data[0]
      console.log(objectfilter)
    })  */

  function deleteMovie(id) {
    axios.delete(`http://localhost:3000/DeleteMovie/${id}`).then((response) => {
      if (response == true) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Pelicula Eliminada",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Error al Eliminar",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  }

  return (
    <div className="min-h-screen dark:text-gray-400 dark:bg-black dark:bg-opacity-90">
      <div className="md:flex">
        <div className="w-full md:flex md:flex-col md:items-start">
          <img
            className="w-full h-full object-cover object-center col-start-1 row-start-1"
            src={`/src/Images/${result[0].Imagen}`}
            alt=""
          />
          <div className="flex justify-end p-2 gap-5 text-2xl">
            <Editar id={target} />
            <Link>
              <FaTrashAlt />
            </Link>
          </div>
        </div>
        <div className="w-full p-5 flex flex-col gap-3">
          <h1 className="text-3xl">{result[0].Titulo}</h1>
          <div className="text-xs flex justify-between">
            <h2>{result[0].Genero}</h2>
            <h3>{result[0].Fecha_Publicacion}</h3>
          </div>
          <div className="text-sm">
            <h4>
              <strong>Director: {result[0].Directores}</strong> {}
            </h4>
            <h4>
              <strong>Protagonizada por: {result[0].Actores_Principales}</strong> {}
            </h4>
            <h4>
              <strong>Franquicia: {result[0].Franquicia}</strong> {}
            </h4>
          </div>
          <p className="text-lg lg:text-xl">{result[0].Sinopsis}</p>
        </div>
      </div>
      <Reviews />
    </div>
  );
}

export default Pelicula;
