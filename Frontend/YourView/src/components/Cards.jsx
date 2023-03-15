import { FaArrowAltCircleRight } from "react-icons/fa";
function Cards() {
  return (
    <div className="w-72 h-64 my-5 bg-cover bg-no-repeat bg-center dark:text-gray-300  border-2 border-oscuro dark:border-salmon rounded-lg flex flex-col gap-2">
        <img
        className="rounded-sm h-3/4 object-contain object-center"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSw36L-x52Z86gx1w2IwFPh0fuMEDAyCJwNw&usqp=CAU"
          alt=""
        />
      <div className="h-full w-full flex flex-col items-start justify-end p-2">
        <h1 className="text-md font-bold">
          Los juegos del hambre: Sinsajo - Parte 1
        </h1>
        <p className="flex items-center text-sm gap-1">
          Mas Información <FaArrowAltCircleRight />
        </p>
      </div>
    </div>
  );
}

export default Cards;
