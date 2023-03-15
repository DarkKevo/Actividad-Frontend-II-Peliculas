import { Link } from "react-router-dom";

function InicioS() {
  return (
    <div className="min-h-screen flex dark:bg-black items-center justify-center bg-salmon p-5 font-Source text-black">
      <form
        className="p-5 bg-salmon border-4 border-azul  flex flex-col items-center justify-center gap-5 rounded-md text-xl"
        action=""
        method="post"
      >
        <h1 className="text-3xl">Inicio de Sesión</h1>
        <input
          className="p-3 bg-white rounded-lg border-azul border-4 w-full"
          type="text"
          name=""
          id=""
          placeholder="Ingrese su nombre"
        />
        
        <input
          className="p-3 bg-white rounded-lg border-azul border-4 w-full"
          type="password"
          name=""
          id=""
          placeholder="Ingrese una contraseña"
        />
        
        <button
          className="p-3 px-10 rounded-lg border-azul bg-white border-4"
          type="submit"
        >
          <span>Entrar</span>
        </button>
        <p className="text-sm">
          Aun no tienes una cuenta? Registrate {''}
          <Link className="font-bold" to={"/registro"}>
             aqui
          </Link>
        </p>
      </form>
    </div>
  );
}

export default InicioS;
