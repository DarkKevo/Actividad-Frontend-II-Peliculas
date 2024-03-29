import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { GetAllMovies } from "../features/Peliculas/PeliculaSlice";
import { useDispatch } from "react-redux";

function Agregar() {
  const [show, setShow] = useState("hidden");
  const [Imagen, setImagen] = useState("");
  const [Titulo, setTitulo] = useState("");
  const [Genero, setGenero] = useState("");
  const [Sinopsis, setSinopsis] = useState("");
  const [Fecha_Publicacion, setFecha_Publicacion] = useState("");
  const [Actores_Principales, setActores_Principales] = useState("");
  const [Directores, setDirectores] = useState("");
  const [Franquicia, setFranquicia] = useState("");
  const [URL_pelicula, setURL_pelicula] = useState("");

  const dispatch = useDispatch()
  let data = JSON.parse(localStorage.getItem("currentUser"));
  let botonesClass =
    "w-full p-1 rounded-lg border-2 border-azul sm:w-[49%] sm:h-10 sm:text-lg";

  function aggCard(
    Genero,
    Titulo,
    Sinopsis,
    Imagen,
    Fecha_Publicacion,
    Actores_Principales,
    Directores,
    Franquicia,
    URL_pelicula,
    token
  ) {
    
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    axios
      .post(
        "http://localhost:3000/NewMovie",
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
        },
        config
      )
      .then((response) => {
        console.log(response);
        Swal.fire({
          position: "top-center",
            icon: "success",
            title: "Pelicula Agregada",
            showConfirmButton: false,
            timer: 2000,
        })
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
  const handleSubmit = (e) => {
    e.preventDefault();
    aggCard(
      Genero,
      Titulo,
      Sinopsis,
      Imagen,
      Fecha_Publicacion,
      Actores_Principales,
      Directores,
      Franquicia,
      URL_pelicula,
      data.token
    );
  };

  return (
    <div className="dark:text-gray-300">
      <div
        className={data.type != 'user' ? 'fixed bottom-28 right-5 bg-slate-600 p-5 rounded-full cursor-pointer' : 'hidden'}
        onClick={() => {
          setShow("fixed md:flex");
        }}
      >
        <FaPlus />
      </div>
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
                className={`${botonesClass}`}
                type="file"
                accept="image/*"
                onChange={(e) => setImagen(e.target.files[0])}
                required
              />
              <input
                value={Titulo}
                className={botonesClass}
                type="text"
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Nombre de la pelicula"
                required
              />
              <select className={botonesClass} onChange={(e) => setGenero(e.target.value)} name="" id="">
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
                value={Sinopsis}
                className={`${botonesClass} h-20`}
                cols="30"
                rows="10"
                onChange={(e) => setSinopsis(e.target.value)}
                placeholder="Sinopsis"
                required
              />
              <input
                value={Fecha_Publicacion}
                className={botonesClass}
                type="date"
                onChange={(e) => setFecha_Publicacion(e.target.value)}
                placeholder="Fecha de producción"
                required
              />
              <input
                value={Actores_Principales}
                className={botonesClass}
                type="text"
                onChange={(e) => setActores_Principales(e.target.value)}
                placeholder="Reparto principal"
                required
              />
              <input
                value={Directores}
                className={botonesClass}
                type="text"
                onChange={(e) => setDirectores(e.target.value)}
                placeholder="Directores"
                required
              />
              <input
                value={Franquicia}
                className={botonesClass}
                type="text"
                onChange={(e) => setFranquicia(e.target.value)}
                placeholder="Franquicia"
                required
              />
              <input
                value={URL_pelicula}
                className={botonesClass}
                type="text"
                name="Direccion de la pelicula"
                onChange={(e) => {
                  setURL_pelicula(e.target.value);
                }}
                id=""
                placeholder="direccion URL"
                required
              />

              <input className={botonesClass} type="submit" value="Agregar" />
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

export default Agregar;
