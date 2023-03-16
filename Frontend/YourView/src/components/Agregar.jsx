import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import axios from 'axios'
function Agregar() {
  const [show, setShow] = useState("hidden");
  const [Genero, setGenero]= useState('')
  const [Titulo, setTitulo]=useState('')
  const [Sinopsis,setSinopsis]=useState('')
  const[Imagen,setImagen]=useState('')
  const[Fecha_Publicacion, setFecha_Publicacion]=useState('')
  const[Actores_Principales, setActores_Principales]=useState('')
  const[Directores, setDirectores]=useState('')
  const [Franquicia, setFranquicia]=useState('')

  let botonesClass = "w-full p-2 rounded-lg border-2 border-azul";
  function aggCard(Genero,Titulo,Sinopsis,Imagen,Fecha_Publicacion,Actores_Principales,Directores,Franquicia){
    axios.post('http://localhost:3000/LoginUser',{
      Genero,
      Titulo,
      Sinopsis,
      Imagen,
      Fecha_Publicacion,
      
    })
  }
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
              
              required
            />
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
              className={`${botonesClass} h-28`}
              
              cols="30"
              rows="10"
              placeholder="Sinopsis"
              required
            />
            <input
              className={botonesClass}
              type="date"
              
              placeholder="Protagonistas"
              required
            />
            <input
              className={botonesClass}
              type="text"
              
              placeholder="directores"
              required
            />
            <input
              className={botonesClass}
              type="text"
              
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
