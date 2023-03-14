import{Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Inicio from './components/Inicio'
import Pelicula from './components/Pelicula'
import InicioS from './components/InicioS'
import Registro from './components/Registro'
import './App.css'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Nav/>} >
          <Route path='/inicio' element={<Inicio/>} />
          <Route path='/movie/:id' element={<Pelicula/>} />
        </Route>
        <Route path='/sesion' element={<InicioS/>}/>
        <Route path='/registro' element={<Registro/>}/>
      </Routes>
    </div>
  )
}

export default App
