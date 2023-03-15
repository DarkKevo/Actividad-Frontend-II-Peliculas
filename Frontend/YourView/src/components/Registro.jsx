import { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import axios from "axios";

function Registro() {
  const [user, setUser] = useState("");
  const [nombreU, setNombreU] = useState("");
  const [claveU, setClaveU] = useState("");
  const [iconU, seticonU] = useState("");
  const [nombreA, setNombreA] = useState("");
  const [claveA, setClaveA] = useState("");
  const [iconA, setIconA] = useState("");
  const [developer_password, setDeveloper_password] = useState("");
  /* Funcion para Cliente */
  function registerU(nombre, clave, icon) {
    axios
      .post("http://localhost:3000/CreateUser", {
        nombre,
        clave,
        icon,
      })
      .then((response) => {
        console.log(response.data);
        window.location.href = "/inicio";
      })
      .catch((error) => console.log(error));
  }
  /* Funcion para Admin */
  function registerA(nombre, clave, icon, developer_password) {
    axios
      .post("http://localhost:3000/CreateAdmin", {
        nombre,
        clave,
        icon,
        developer_password,
      })
      .then((response) => {
        console.log(response.data);
        window.location.href = "/inicio";
      })
      .catch((error) => console.log(error));
  }
  /* SUBMIT */
  return (
    <div className="min-h-screen flex flex-col gap-10 dark:bg-black items-center justify-center bg-salmon p-5 font-Source text-black">
      <Logo tamaño={"text-5xl"} />
      <form
        className="p-5 bg-salmon border-4 border-azul  flex flex-col items-center justify-center gap-5 rounded-md text-xl"
        action=""
        method="post"
      >
        <h1 className="text-3xl">Registro</h1>
        <select
          className="p-3  bg-white rounded-lg text-black border-azul border-4 w-full"
          name=""
          id=""
          onChange={(e) => {
            setUser(e.target.value);
          }}
        >
          <option value="Elija una opcion">Elija una opcion</option>
          <option value="Cliente">Cliente</option>
          <option value="Administrador">Administrador</option>
        </select>
        <input
          className="p-3 bg-white rounded-lg border-azul border-4 w-full"
          type="text"
          name=""
          id=""
          placeholder="Ingrese su nombre"
        />
        <input
          className="p-3 bg-white rounded-lg border-azul border-4 w-full"
          type="email"
          name=""
          id=""
          placeholder="Ingrese su Correo Electronico"
        />
        <input
          className="p-3 bg-white rounded-lg border-azul border-4 w-full"
          type="password"
          name=""
          id=""
          placeholder="Ingrese una contraseña"
        />
        <div
          className={user == "Administrador" ? "flex flex-col gap-3" : "hidden"}
        >
          <p className="text-sm">Ingrese su clave de Administrador</p>
          <input
            className="p-3 bg-white rounded-lg border-azul border-4 w-full"
            type="text"
            name=""
            id=""
            placeholder="ingrese clave"
          />
        </div>
        <button
          className="p-3 rounded-lg border-azul bg-white border-4"
          type="submit"
        >
          <span>Registrarme</span>
        </button>
        <p className="text-sm">
          Ya tienes una cuenta? Inicia Sesión{" "}
          <Link className="font-bold" to={"/"}>
            aqui
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Registro;
