import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';

function Editar() {
  const [Imagen, setImagen] = useState('');
  const [Titulo, setTitulo] = useState('');
  const [Genero, setGenero] = useState('');
  const [Sinopsis, setSinopsis] = useState('');
  const [Fecha_Publicacion, setFecha_Publicacion] = useState('');
  const [Actores_Principales, setActores_Principales] = useState('');
  const [Directores, setDirectores] = useState('');
  const [Franquicia, setFranquicia] = useState('');
  const [URL_pelicula, setURL_pelicula] = useState('');

  function EditMovie(Genero, Titulo, Sinopsis, Imagen, Fecha_Publicacion, Actores_Principales, Directores, Franquicia, URL_pelicula, token) {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    };

    axios
      .put(
        'http://localhost:3000/EditMovie',
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
        if (response == true) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Pelicula Agregada',
            showConfirmButton: false,
            timer: 2000,
          });
        }
        setTitulo('');
        setSinopsis('');
        setImagen('');
        setFecha_Publicacion('');
        setActores_Principales('');
        setDirectores('');
        setFranquicia('');
        setURL_pelicula('');
        dispatch(GetAllMovies());
      })
      .catch((error) => console.log(error));
  }

  const [show, setShow] = useState('hidden');
  let botonesClass = 'w-full p-1 rounded-lg border-2 border-azul sm:w-[49%] sm:h-10 sm:text-lg';
  return (
    <div>
      <FaEdit
        className='cursor-pointer'
        onClick={() => {
          setShow('fixed');
        }}
      />
      {/* modal */}
      <div className={`${show} w-full h-screen top-0 left-0 flex flex-col items-center justify-center bg-black bg-opacity-70`}>
        <div className='h-screen flex flex-col text-xl bg-salmon border-2 border-azul rounded-lg dark:bg-black md:min-h-[75%] md:max-h-[90%] md:w-3/4'>
          <div className='h-1/6 border-b-2 border-azul flex items-center p-3'>Agregar Pelicula</div>
          <div className='h-full'>
            <form className='h-full flex flex-wrap items-center justify-between p-3 gap-1' method='post' required>
              <input className={botonesClass} type='file' required />
              <input className={botonesClass} type='text' placeholder='Nombre de la pelicula' required />
              <select className={botonesClass} onChange={(e) => setGenero(e.target.value)} name='' id=''>
                <option value=''>Seleccione una categoria</option>
                <option value='1'>Accion</option>
                <option value='2'>Drama</option>
                <option value='3'>Terror</option>
                <option value='4'>Fantasia</option>
                <option value='5'>Musical</option>
                <option value='6'>Ciencia-Ficcion</option>
                <option value='7'>Documental</option>
              </select>
              <textarea className={`${botonesClass} h-20`} cols='30' rows='10' placeholder='Sinopsis' required />
              <input className={botonesClass} type='date' placeholder='Fecha de producción' required />
              <input className={botonesClass} type='text' placeholder='Reparto principal' required />
              <input className={botonesClass} type='text' placeholder='Directores' required />
              <input className={botonesClass} type='text' placeholder='Franquicia' required />
              <input className={botonesClass} type='url' name='Direccion de la pelicula' id='' placeholder='direccion URL' />
              <input className={`${botonesClass} text-gray-600 sm:w-[100%]`} type='submit' value='Agregar' />
            </form>
          </div>
          <div className='h-1/6 border-t-2 border-azul flex items-center p-3'>
            <button
              onClick={() => {
                setShow('hidden');
              }}
              className='border-2 border-azul p-3 rounded-lg bg-morado bg-opacity-40'
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
