import { Link } from "react-router-dom";
function GenericNotFound(){
    return(
        <div className="text-center mt-5 mx-4 flex flex-col justify-evenly">
      <h1 className="text-xl font-bold bg-red-600 hover:bg-red-900 rounded-lg">
        404 Page Not Found
      </h1>
      <p className="italic">
        😔 La vista que deseas ver no se ha encontrado, intenta con otra ruta...
      </p>
      <Link to={"/inicio"}>
        <span className="p-2 bg-green-700 hover:bg-green-900 rounded-lg ">
          Regresar al inicio
        </span>
      </Link>
    </div>
    )
}

export default GenericNotFound;