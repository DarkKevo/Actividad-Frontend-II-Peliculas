import { useState } from "react";
import { FaEdit } from "react-icons/fa";

function Editar() {
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
              method="post"
              required
            >
              <input className={botonesClass} type="file" required />
              <input
                className={botonesClass}
                type="text"
                placeholder="Nombre de la pelicula"
                required
              />
              <input
                className={botonesClass}
                type="text"
                placeholder="Genero"
                required
              />
              <textarea
                className={`${botonesClass} h-20`}
                cols="30"
                rows="10"
                placeholder="Sinopsis"
                required
              />
              <input
                className={botonesClass}
                type="date"
                placeholder="Fecha de producción"
                required
              />
              <input
                className={botonesClass}
                type="text"
                placeholder="Reparto principal"
                required
              />
              <input
                className={botonesClass}
                type="text"
                placeholder="Directores"
                required
              />
              <input
                className={botonesClass}
                type="text"
                placeholder="Franquicia"
                required
              />
              <input
                className={botonesClass}
                type="url"
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
