import { useState } from "react";
import Logo from "./Logo";
import { FaBars, FaTimes, FaSistrix, FaSignOutAlt } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
function Nav() {
  const [toggleMenu, setToggleMenu] = useState("-left-full");
  function cambio() {
    if (toggleMenu == "-left-full") {
      setToggleMenu("left-0");
    } else {
      setToggleMenu("-left-full");
    }
  }
  return (
    <div className="min-h-screen">
      <header className="flex justify-between items-center p-5 bg-salmon dark:bg-oscuro">
        <Logo tamaño={"text-3xl"} />
        <ul
          className={
            toggleMenu +
            " fixed transition-all duration-500 bg-salmon dark:bg-oscuro dark:text-white text-3xl top-0 h-screen w-full flex flex-col items-center justify-center gap-10 sm:left-0 sm:relative sm:flex-row sm:w-auto sm:h-auto sm:text-oscuro sm:text-xl"
          }
        >
          <FaTimes
            onClick={cambio}
            className="text-3xl absolute top-8 right-8 sm:hidden"
          />
          <li>
            <div className="flex sm:flex bg-blue-100 rounded-xl text-lg text-oscuro border-2 border-morado px-2 gap-2 items-center">
              <FaSistrix />
              <input
                className="bg-blue-100 bg-opacity-20 placeholder:text-oscuro placeholder:text-2xl py-1 focus-visible:outline-none"
                type="text"
                name=""
                id=""
                placeholder="Buscar..."
              />
            </div>
          </li>
          <li className="flex gap-3 items-center  p-3  sm:p-0 sm:gap-1 sm:text-sm md:text-lg md:px-3 md:gap-3">
            <img
              className="w-16 h-16 border-2 border-morado rounded-full object-cover object-center sm:w-12 sm:h-12"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <Link to={"/"} className="flex items-center gap-1 md:gap-2">
              Cerrar Sesión
              <FaSignOutAlt />
            </Link>
          </li>
        </ul>
        <FaBars
          className="text-oscuro dark:text-white text-3xl sm:hidden"
          onClick={cambio}
        />
      </header>
      <Outlet />
    </div>
  );
}

export default Nav;
