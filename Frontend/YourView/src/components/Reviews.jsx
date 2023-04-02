import { AiOutlineSend } from 'react-icons/ai';
import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { GetAllMovies } from '../features/Peliculas/PeliculaSlice';
import Swal from 'sweetalert2';

function Reviews({ id, comentary }) {
  let data = JSON.parse(localStorage.getItem('currentUser'));
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  function NewComentary(nombre, icon, comentary, idPelicula) {
    console.log(`El id es ${idPelicula}`);
    let config = {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    };

    axios
      .put(
        'http://localhost:3000/NewComentary',
        {
          nombre,
          icon,
          comentary,
          idPelicula,
        },
        config
      )
      .then((response) => {
        console.log(response);
        if (response.data == true) {
          dispatch(GetAllMovies());
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Comentario Agregado',
            showConfirmButton: false,
            timer: 2000,
          });
        } else {
          Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Error al Agergar',
            showConfirmButton: false,
            timer: 2000,
          });
        }
        setText('');
      });
  }

  function handler(e) {
    e.preventDefault();
    NewComentary(data.nombre, data.icon, text, id);
  }

  if (comentary.length == 0) {
    return (
      <div className='p-5 flex flex-col items-center md:px-24 lg:px-36'>
        <form onSubmit={handler} className='w-full flex  my-4 text-xl items-start gap-2' action=''>
          {/* <input className="border-2 border-azul p-2 w-full" type="text" name="" id="" placeholder="Escribe un comentario"/> */}
          <textarea
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
            className='border-4 rounded-lg h-32 border-morado p-3 w-full'
            name=''
            id=''
            cols='30'
            rows='10'
            placeholder='¿Que te parecio la pelicula?'
          ></textarea>
          <button className='text-4xl text-oscuro dark:text-salmon' type='submit'>
            <AiOutlineSend />
          </button>
        </form>

        <div className='flex flex-col gap-5'>
          <h2>No hay Comentarios Aun</h2>
        </div>
      </div>
    );
  }

  return (
    <div className='p-5 flex flex-col items-center md:px-24 lg:px-36'>
      <form onSubmit={handler} className='w-full flex  my-4 text-xl items-start gap-2' action=''>
        {/* <input className="border-2 border-azul p-2 w-full" type="text" name="" id="" placeholder="Escribe un comentario"/> */}
        <textarea
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
          className='border-4 rounded-lg h-32 border-morado p-3 w-full'
          name=''
          id=''
          cols='30'
          rows='10'
          placeholder='¿Que te parecio la pelicula?'
        ></textarea>
        <button className='text-4xl text-oscuro dark:text-salmon' type='submit'>
          <AiOutlineSend />
        </button>
      </form>

      <div className='flex flex-col gap-5'>
        {comentary.map((x) => (
          <div className='w-full  bg-morado bg-opacity-50 rounded-lg flex items-start gap-5 p-3'>
            <img className='rounded-full w-12 h-12 object-cover object-center' src={x.icon} alt='' />
            <div className='flex flex-col gap-3'>
              <h1 className='font-bold text-lg'>{x.nombre}</h1>
              <p>{x.comentary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
