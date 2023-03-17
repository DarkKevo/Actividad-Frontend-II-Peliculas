import Logo from "./Logo";
import { Link } from "react-router-dom";
function GenericNotFound() {
  return (
    <div className="min-h-screen text-center p-5 gap-5 dark:text-white dark:bg-black dark:bg-opacity-80 bg-salmon flex flex-col justify-center items-center">
      <Logo tamaño={'text-4xl'}/>
      <h1 className="text-xl font-bold">
        404 Page Not Found
      </h1>
      <p>
        😔 Parece que la pagina a la que desea ingresar no existe, pruebe con otra o...
      </p>
      <Link to={"/"}>
        <span className="p-3  bg-azul bg-opacity-50 rounded-lg">
          Regrese al inicio <strong>AQUI</strong>
        </span>
      </Link>
    </div>
  );
}

export default GenericNotFound;
