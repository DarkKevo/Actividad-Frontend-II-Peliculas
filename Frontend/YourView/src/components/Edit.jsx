import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { GetAllMovies } from "../features/Peliculas/PeliculaSlice";

function Editar({ id }) {
  const [Imagen, setImagen] = useState("");
  const [Titulo, setTitulo] = useState("");
  const [Genero, setGenero] = useState("");
  const [Sinopsis, setSinopsis] = useState("");
  const [Fecha_Publicacion, setFecha_Publicacion] = useState("");
  const [Actores_Principales, setActores_Principales] = useState("");
  const [Directores, setDirectores] = useState("");
  const [Franquicia, setFranquicia] = useState("");
  const [URL_pelicula, setURL_pelicula] = useState("");

  const dispatch = useDispatch();

  function EditMovie(
    Genero,
    Titulo,
    Sinopsis,
    Imagen,
    Fecha_Publicacion,
    Actores_Principales,
    Directores,
    Franquicia,
    URL_pelicula,
    token,
    idPelicula
  ) {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    axios
      .put(
        "http://localhost:3000/EditMovie",
        {
          Genero,
          Titulo,
          Sinopsis,
          Imagen,
          Fecha_Publicacion,
          Actores_Principales,
          Directores,
          Franquicia,
          URL_pelicula,
          idPelicula,
        },
        config
      )
      .then((response) => {
        if (response == true) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Pelicula Editada",
            showConfirmButton: false,
            timer: 2000,
          });
        }
        setTitulo("");
        setSinopsis("");
        setImagen("");
        setFecha_Publicacion("");
        setActores_Principales("");
        setDirectores("");
        setFranquicia("");
        setURL_pelicula("");
        dispatch(GetAllMovies());
      })
      .catch((error) => console.log(error));
  }

  let data = JSON.parse(localStorage.getItem("currentUser"));

  const handleSubmit = (e) => {
    e.preventDefault();
    EditMovie(
      Genero,
      Titulo,
      Sinopsis,
      Imagen,
      Fecha_Publicacion,
      Actores_Principales,
      Directores,
      Franquicia,
      URL_pelicula,
      data.token,
      id
    );
  };

  const [show, setShow] = useState("hidden");
  let botonesClass =
    "w-full p-1 rounded-lg border-2 border-azul sm:w-[49%] sm:h-10 sm:text-lg";

  return (
    <div>
      <FaEdit
        className="cursor-pointer"
        onClick={() => {
          setShow("fixed");
        }}
      />
      {/* modal */}
      <div
        className={`${show} w-full h-screen top-0 left-0 flex flex-col items-center justify-center bg-black bg-opacity-70`}
      >
        <div className="h-screen flex flex-col text-xl bg-salmon border-2 border-azul rounded-lg dark:bg-black md:min-h-[75%] md:max-h-[90%] md:w-3/4">
          <div className="h-1/6 border-b-2 border-azul flex items-center p-3">
            Agregar Pelicula
          </div>
          <div className="h-full">
            <form
              className="h-full flex flex-wrap items-center justify-between p-3 gap-1"
              onSubmit={handleSubmit}
              method="post"
              required
            >
              <input
                className={botonesClass}
                onChange={(e) => {
                  setImagen(e.target.files[0]);
                }}
                type="file"
                accept="image/*"
                required
              />
              <input
                className={botonesClass}
                onChange={(e) => {
                  setTitulo(e.target.value);
                }}
                type="text"
                placeholder="Nombre de la pelicula"
                required
              />
              <select
                className={botonesClass}
                onChange={(e) => {
                  setGenero(e.target.value);
                }}
                name=""
                id=""
              >
                <option value="">Seleccione una categoria</option>
                <option value="1">Accion</option>
                <option value="2">Drama</option>
                <option value="3">Terror</option>
                <option value="4">Suspenso</option>
                <option value="5">Comedia</option>
                <option value="6">KPOP</option>
                <option value="7">Fantasia</option>
                <option value="8">Musical</option>
                <option value="9">Ciencia-Ficcion</option>
                <option value="10">Documental</option>
              </select>
              <textarea
                className={`${botonesClass} h-20`}
                onChange={(e) => {
                  setSinopsis(e.target.value);
                }}
                cols="30"
                rows="10"
                placeholder="Sinopsis"
                required
              />
              <input
                className={botonesClass}
                type="date"
                onChange={(e) => {
                  setFecha_Publicacion(e.target.value);
                }}
                placeholder="Fecha de producción"
                required
              />
              <input
                className={botonesClass}
                type="text"
                onChange={(e) => {
                  setActores_Principales(e.target.value);
                }}
                placeholder="Reparto principal"
                required
              />
              <input
                className={botonesClass}
                type="text"
                onChange={(e) => {
                  setDirectores(e.target.value);
                }}
                placeholder="Directores"
                required
              />
              <input
                className={botonesClass}
                type="text"
                onChange={(e) => {
                  setFranquicia(e.target.value);
                }}
                placeholder="Franquicia"
                required
              />
              <input
                className={botonesClass}
                type="text"
                onChange={(e) => {
                  setURL_pelicula(e.target.value);
                }}
                name="Direccion de la pelicula"
                id=""
                placeholder="direccion URL"
              />
              <input
                className={`${botonesClass} text-gray-600 sm:w-[100%]`}
                type="submit"
                value="Agregar"
              />
            </form>
          </div>
          <div className="h-1/6 border-t-2 border-azul flex items-center p-3">
            <button
              onClick={() => {
                setShow("hidden");
              }}
              className="border-2 border-azul p-3 rounded-lg bg-morado bg-opacity-40"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editar;
