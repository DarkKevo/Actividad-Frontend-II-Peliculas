import { useState } from "react";
import Logo from "./Logo"
import {FaBars,FaTimes,FaSistrix,FaArrowAltCircleRight} from "react-icons/fa";
import{Outlet}from 'react-router-dom'
function Nav(){
    const[toggleMenu, setToggleMenu] = useState('-left-full');
    function cambio() {
        if (toggleMenu == "-left-full") {
          setToggleMenu("left-0");
        } else {
          setToggleMenu("-left-full");
        }
      }
    return(
        <div className='min-h-screen'>
            <header className="flex justify-between items-center p-5 bg-salmon dark:bg-oscuro">
                <Logo tamaño={'text-3xl'}/>
                <ul className={toggleMenu + " absolute transition-all duration-500 bg-salmon text-3xl top-0 h-full w-full flex flex-col items-center justify-center gap-10"}>
                <FaTimes
                onClick={cambio}
                className="text-3xl absolute top-8 right-8"
                />
                    <li className="flex gap-3 items-center">
                    <FaSistrix/>
                       Buscar 
                    </li>
                    <li className="flex gap-3 items-center">
                       Cerrar Sesión <FaArrowAltCircleRight/>
                    </li>
                </ul>
                <FaBars
                className="text-oscuro dark:text-white text-3xl"
                onClick={cambio}
                />
            </header>
            <Outlet/>
        </div>
    )
}

export default Nav;