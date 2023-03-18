import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
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
        console.log("Pelicula agregada" + response.data);
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
    setGenero("");
    setTitulo("");
    setSinopsis("");
    setImagen("");
    setFecha_Publicacion("");
    setActores_Principales("");
    setDirectores("");
    setFranquicia("");
    setURL_pelicula('');
  };
  return (
    <div className="dark:text-gray-300">
      <div
        className="fixed bottom-28 right-5 bg-slate-600 p-5 rounded-full cursor-pointer"
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
                className={botonesClass}
                type="text"
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Nombre de la pelicula"
                required
              />
              <input
                className={botonesClass}
                type="text"
                onChange={(e) => setGenero(e.target.value)}
                placeholder="Genero"
                required
              />
              <textarea
                className={`${botonesClass} h-20`}
                cols="30"
                rows="10"
                onChange={(e) => setSinopsis(e.target.value)}
                placeholder="Sinopsis"
                required
              />
              <input
                className={botonesClass}
                type="date"
                onChange={(e) => setFecha_Publicacion(e.target.value)}
                placeholder="Fecha de producción"
                required
              />
              <input
                className={botonesClass}
                type="text"
                onChange={(e) => setActores_Principales(e.target.value)}
                placeholder="Reparto principal"
                required
              />
              <input
                className={botonesClass}
                type="text"
                onChange={(e) => setDirectores(e.target.value)}
                placeholder="Directores"
                required
              />
              <input
                className={botonesClass}
                type="text"
                onChange={(e) => setFranquicia(e.target.value)}
                placeholder="Franquicia"
                required
              />
              <input
                className={botonesClass}
                type="url"
                name="Direccion de la pelicula"
                onChange={(e) => {
                  setURL_pelicula(e.target.value);
                }}
                id=""
                placeholder="direccion URL"
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
