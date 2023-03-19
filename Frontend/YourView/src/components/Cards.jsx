import React from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
function Cards({titulo, img, id}) {

  
  return (

    <div className="w-72 h-72 my-5 bg-cover bg-no-repeat bg-center dark:text-gray-300  border-2 border-oscuro dark:border-salmon rounded-lg flex flex-col gap-2">
      <img
        className="rounded-sm h-3/4 object-contain object-center"
        src={`/src/Images/${img}`}
        alt=""
      />
      <div className="h-full w-full flex flex-col items-start justify-end p-2 pb-4">
        <h1 className="text-md font-bold">
          {titulo}
        </h1>
        <Link to={`/movie/${id}`}>
          <p className="flex items-center text-sm gap-1">
            Mas Información <FaArrowAltCircleRight />
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Cards;
