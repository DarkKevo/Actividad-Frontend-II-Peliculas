import { useState } from 'react';
import Logo from './Logo';
import { FaBars, FaTimes, FaSistrix, FaSignOutAlt } from 'react-icons/fa';
import { Outlet, Link } from 'react-router-dom';
function Nav() {
  let data_meta = JSON.parse(localStorage.getItem('currentUser'));
  const [toggleMenu, setToggleMenu] = useState('-left-full');
  function cambio() {
    if (toggleMenu == '-left-full') {
      setToggleMenu('left-0');
    } else {
      setToggleMenu('-left-full');
    }
  }

  function Log_Out() {
    localStorage.removeItem('currentUser');
  }

  if (localStorage.getItem('currentUser') === null){
    return (
      <div className='min-h-screen'>
      <header className='flex justify-between items-center p-5 bg-salmon dark:bg-oscuro'>
        <Link to={'/inicio'}>
          <Logo tamaño={'text-3xl'} />
        </Link>
        <ul
          className={
            toggleMenu +
            ' fixed transition-all duration-500 bg-salmon dark:bg-oscuro dark:text-white text-3xl top-0 h-screen w-full flex flex-col items-center justify-center gap-10 sm:left-0 sm:relative sm:flex-row sm:w-auto sm:h-auto sm:text-oscuro sm:text-xl'
          }
        >
          <FaTimes onClick={cambio} className='text-3xl absolute top-8 right-8 sm:hidden' />
          <li>
            <div className='flex sm:flex bg-blue-100 rounded-xl text-lg text-oscuro border-2 border-morado px-2 gap-2 items-center'>
              <FaSistrix />
              <input
                className='bg-blue-100 bg-opacity-20 placeholder:text-oscuro placeholder:text-2xl py-1 focus-visible:outline-none'
                type='text'
                name=''
                id=''
                placeholder='Buscar...'
              />
            </div>
          </li>
          <li className='flex gap-3 items-center  p-3  sm:p-0 sm:gap-1 sm:text-sm md:text-lg md:px-3 md:gap-3'>
            <img className='w-16 h-16 border-2 border-morado rounded-full object-cover object-center sm:w-12 sm:h-12' src='null' alt='' />
            <Link to={'/'} className='flex items-center gap-1 md:gap-2'>
              <p onClick={Log_Out}>Cerrar Sesión</p>
              <FaSignOutAlt />
            </Link>
          </li>
        </ul>
        <FaBars className='text-oscuro dark:text-white text-3xl sm:hidden' onClick={cambio} />
      </header>
      <Outlet />
    </div>
    )
  }

  return (
    <div className='min-h-screen'>
      <header className='flex justify-between items-center p-5 bg-salmon dark:bg-oscuro'>
        <Link to={'/inicio'}>
          <Logo tamaño={'text-3xl'} />
        </Link>
        <ul
          className={
            toggleMenu +
            ' fixed transition-all duration-500 bg-salmon dark:bg-oscuro dark:text-white text-3xl top-0 h-screen w-full flex flex-col items-center justify-center gap-10 sm:left-0 sm:relative sm:flex-row sm:w-auto sm:h-auto sm:text-oscuro sm:text-xl'
          }
        >
          <FaTimes onClick={cambio} className='text-3xl absolute top-8 right-8 sm:hidden' />
          <li>
            <div className='flex sm:flex bg-blue-100 rounded-xl text-lg text-oscuro border-2 border-morado px-2 gap-2 items-center'>
              <FaSistrix />
              <input
                className='bg-blue-100 bg-opacity-20 placeholder:text-oscuro placeholder:text-2xl py-1 focus-visible:outline-none'
                type='text'
                name=''
                id=''
                placeholder='Buscar...'
              />
            </div>
          </li>
          <li className='flex gap-3 items-center  p-3  sm:p-0 sm:gap-1 sm:text-sm md:text-lg md:px-3 md:gap-3'>
            <img className='w-16 h-16 border-2 border-morado rounded-full object-cover object-center sm:w-12 sm:h-12' src={data_meta.icon} alt='' />
            <Link to={'/'} className='flex items-center gap-1 md:gap-2'>
              <p onClick={Log_Out}>Cerrar Sesión</p>
              <FaSignOutAlt />
            </Link>
          </li>
        </ul>
        <FaBars className='text-oscuro dark:text-white text-3xl sm:hidden' onClick={cambio} />
      </header>
      <Outlet />
    </div>
  );
}

export default Nav;
