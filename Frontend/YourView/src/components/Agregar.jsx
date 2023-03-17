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

  let botonesClass = "w-full p-2 text-sm rounded-lg border-2 border-azul sm:text-xs";
  function aggCard(
    Genero,
    Titulo,
    Sinopsis,
    Imagen,
    Fecha_Publicacion,
    Actores_Principales,
    Directores,
    Franquicia
  ) {
    axios
      .post("http://localhost:3000/NewMovie", {
        Genero,
        Titulo,
        Sinopsis,
        Imagen,
        Fecha_Publicacion,
        Actores_Principales,
        Directores,
        Franquicia,
      })
      .then((response) => {
        console.log("Pelicula agregada");
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
      Franquicia
    );
    setGenero("");
    setTitulo("");
    setSinopsis("");
    setImagen("");
    setFecha_Publicacion("");
    setActores_Principales("");
    setDirectores("");
    setFranquicia("");
  };
  return (
    <div className="dark:text-gray-300">
      <div className="fixed bottom-28 right-5 bg-slate-600 p-5 rounded-full">
        <FaPlus
          onClick={() => {
            setShow("fixed");
          }}
        />
      </div>
      {/* modal */}
      <div
        className={`${show} w-full h-screen top-0 left-0 md:flex md:items-center md:justify-center md:bg-black md:bg-opacity-75 md:p-5`}
      >
        <div className="w-100 h-full max-h-screen flex flex-col md:rounded-lg bg-salmon dark:bg-black dark:border-2 dark:border-azul md:w-1/2 md:h-auto">
          <div className="h-1/6 border-b-2 border-azul flex items-center p-3">
            Agregar Pelicula
          </div>
          <div>
            <form
              className="flex flex-col gap-2 p-3"
              onSubmit={handleSubmit}
              method="post"
              required
            >
              <input
                className={botonesClass}
                type="file"
                onChange={(e) => setImagen(e.target.value)}
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
              <input className={botonesClass} type="submit" value="Agregar" />
            </form>
          </div>
          <div className="1/6 border-t-2 border-azul flex items-center p-3">
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
