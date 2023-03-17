import { Link } from "react-router-dom";
import Reviews from "./Reviews";
import Editar from "./Edit";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
function Pelicula() {
  return (
    <div className="min-h-screen dark:text-gray-400 dark:bg-black dark:bg-opacity-90">
      <div className="md:flex">
        <div className="w-full md:flex md:flex-col md:items-start">
          <img
            className="w-full h-full object-cover object-center col-start-1 row-start-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSw36L-x52Z86gx1w2IwFPh0fuMEDAyCJwNw&usqp=CAU"
            alt=""
          />
          <div className="flex justify-end p-2 gap-5 text-2xl">
            <Editar />
            <Link>
              <FaTrashAlt />
            </Link>
          </div>
        </div>
        <div className="w-full p-5 flex flex-col gap-3">
          <h1 className="text-3xl">Los juegos del hambre: Sinsajo - Parte 1</h1>
          <div className="text-xs flex justify-between">
            <h2>Ciencia ficción/Aventura</h2>
            <h3>2004/12/2</h3>
          </div>
          <div className="text-sm">
            <h4>
              <strong>Director:</strong> Francis Lawrence
            </h4>
            <h4>
              <strong>Protagonizada por:</strong> Jennifer Lawrence, Josh
              Hutcherson, Jennifer Lawrence, Josh Hutcherson{" "}
            </h4>
            <h4>
              <strong>Franquicia:</strong> Disney{" "}
            </h4>
          </div>
          <p className="text-lg lg:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            unde facere cum impedit ea, harum odit consequuntur voluptatum vero,
            quos possimus doloribus provident tenetur ab neque tempore dolores
            quas quidem!
          </p>
        </div>
      </div>
      <Reviews />
    </div>
  );
}

export default Pelicula;
