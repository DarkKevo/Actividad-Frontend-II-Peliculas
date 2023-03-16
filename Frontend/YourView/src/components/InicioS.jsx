import { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import axios from "axios";

function InicioS() {
  const [nombre, setNombre] = useState("");
  const [clave, setClave] = useState("");
  function sesion(nombre, clave) {
    axios
      .post("http://localhost:3000/NewMovie", {
        nombre: nombre,
        clave: clave,
      })
      .then((response) => {
        console.log(response.data);
        window.location.href = "/inicio";
      })
      .catch((error) => console.log(error));
  }
  const handleSubmit =(e) => {
    e.preventDefault();
    console.log(nombre, clave);
    sesion(nombre, clave);
    setNombre("");
    setClave("");
  };
  return (
    <div className="min-h-screen flex flex-col gap-10 dark:bg-black items-center justify-center bg-salmon p-5 font-Source text-black">
      <Logo tamaño={"text-5xl"} />
      <form
        className="p-5 bg-salmon border-4 border-azul  flex flex-col items-center justify-center gap-5 rounded-md text-xl"
        onSubmit={handleSubmit}
        method="post"
      >
        <h1 className="text-3xl">Inicio de Sesión</h1>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="p-3 bg-white rounded-lg border-azul border-4 w-full"
          type="text"
          placeholder="Ingrese su nombre"
          required
        />

        <input
          value={clave}
          onChange={(e) => {
            setClave(e.target.value);
          }}
          className="p-3 bg-white rounded-lg border-azul border-4 w-full"
          type="password"
          placeholder="Ingrese una contraseña"
        />
        <button
          className="p-3 px-10 rounded-lg border-azul bg-white border-4"
          type="submit"
        >
          <span>Entrar</span>
        </button>
        <p className="text-sm">
          Aun no tienes una cuenta? Registrate {""}
          <Link className="font-bold" to={"/registro"}>
            aqui
          </Link>
        </p>
      </form>
    </div>
  );
}

export default InicioS;
