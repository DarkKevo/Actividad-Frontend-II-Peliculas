import { FaPlus } from "react-icons/fa";
import { useState } from "react";

function Agregar() {
  const [show, setShow] = useState("hidden");
  let botonesClass = "w-full p-2 rounded-lg border-2 border-azul";
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
        className={`${show} w-full h-screen top-0 left-0 flex flex-col bg-salmon dark:bg-black`}
      >
        <div className="h-1/6 border-b-2 border-azul flex items-center p-3">
          Agregar Pelicula
        </div>
        <div className="h-full">
          <form className="flex flex-col gap-2 p-3" action="" required>
            <input
              className={botonesClass}
              type="file"
              name=""
              id=""
              required
            />
            <input
              className={botonesClass}
              type="text"
              name=""
              id=""
              placeholder="Nombre de la pelicula"
              required
            />
            <input
              className={botonesClass}
              type="text"
              name=""
              id=""
              placeholder="Genero"
              required
            />
            <textarea
              className={`${botonesClass} h-28`}
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Sinopsis"
              required
            />
            <input
              className={botonesClass}
              type="date"
              name=""
              id=""
              placeholder="Protagonistas"
              required
            />
            <input
              className={botonesClass}
              type="text"
              name=""
              id=""
              placeholder="directores"
              required
            />
            <input
              className={botonesClass}
              type="text"
              name=""
              id=""
              placeholder="Franquicia"
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
  );
}

export default Agregar;
