import Cards from "./Cards";
import Agregar from "./Agregar";
function Inicio(){
    return(
        <div className="bg-gray-100 dark:bg-black dark:bg-opacity-90 bg-opacity-70 flex flex-wrap items-center justify-evenly p-5 ">
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Agregar/>
        </div>
    )
}


export default Inicio;