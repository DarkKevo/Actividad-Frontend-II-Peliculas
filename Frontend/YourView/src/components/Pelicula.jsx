import { Link } from 'react-router-dom';
import Reviews from './Reviews';
import Editar from './Edit';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

function Pelicula() {
  console.log(useParams());

  let target = useParams();
  var objectfilter

  axios.get(`http://localhost:3000/Single/${target.id}`)
    .then((response) => {
      objectfilter = response.data[0]
      console.log(objectfilter)
    }) 

  function deleteMovie(id) {
    axios.delete(`http://localhost:3000/DeleteMovie/${id}`).then((response) => {
      if (response == true) {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Pelicula Eliminada',
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: 'Error al Eliminar',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  }

  return (
    <div className='min-h-screen dark:text-gray-400 dark:bg-black dark:bg-opacity-90'>
      <div className='md:flex'>
        <div className='w-full md:flex md:flex-col md:items-start'>
          <img className='w-full h-full object-cover object-center col-start-1 row-start-1' src={`src/Images/`} alt='' />
          <div className='flex justify-end p-2 gap-5 text-2xl'>
            <Editar />
            <Link>
              <FaTrashAlt />
            </Link>
          </div>
        </div>
        <div className='w-full p-5 flex flex-col gap-3'>
          <h1 className='text-3xl'>{}</h1>
          <div className='text-xs flex justify-between'>
            <h2>{}</h2>
            <h3>{}</h3>
          </div>
          <div className='text-sm'>
            <h4>
              <strong>Director:</strong> {}
            </h4>
            <h4>
              <strong>Protagonizada por:</strong> {}
            </h4>
            <h4>
              <strong>Franquicia:</strong> {}
            </h4>
          </div>
          <p className='text-lg lg:text-xl'>{}</p>
        </div>
      </div>
      <Reviews />
    </div>
  );
}

export default Pelicula;
