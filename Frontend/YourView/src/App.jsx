import{Route, Routes} from 'react-router-dom'
import { useState } from 'react';
import {FaMoon} from "react-icons/fa";
import Nav from './components/Nav'
import Inicio from './components/Inicio'
import Pelicula from './components/Pelicula'
import InicioS from './components/InicioS'
import Registro from './components/Registro'
import './App.css'

function App() {

  const [darkToggle, setDarkToggle] = useState(false)

  return (
    <div className={`min-h-scree ${
      darkToggle && 'dark'
    }`}>
      <Routes>
        <Route path='/' element={<Nav/>} >
          <Route path='/inicio' element={<Inicio/>} />
          <Route path='/movie/:id' element={<Pelicula/>} />
        </Route>
        <Route path='/sesion' element={<InicioS/>}/>
        <Route path='/registro' element={<Registro/>}/>
      </Routes>
      <div onClick={() => setDarkToggle(!darkToggle)} className='w-1/6 absolute bottom-0 right-0 rounded-full bg-red-100'>
      <FaMoon/>
      </div>
    </div>
  )
}

export default App
