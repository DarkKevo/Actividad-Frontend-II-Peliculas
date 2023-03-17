import { useState } from "react";
import Swal from "sweetalert2";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import axios from "axios";

function InicioS() {
  const [user, setUser] = useState("");
  const [nombre, setNombre] = useState("");
  const [clave, setClave] = useState("");

  //inicio sesion
  function sesion(nombre, clave) {
    axios
      .post("http://localhost:3000/LoginUser", {
        nombre: nombre,
        clave: clave,
      })
      .then((response) => {
        if (response.data.status == false) {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Los Datos son Invalidos",
            showConfirmButton: false,
            timer: 2000,
          });
        } else {
          console.log(response.data);
          localStorage.setItem(
            "currentUser",
            JSON.stringify({
              nombre: response.data.nombre,
              icon: response.data.icon,
              token: response.data.token,
            })
          );
          window.location.href = "/inicio";
        }
      })

      .catch((error) => console.log(error));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nombre, clave);
    if (user == "Administrador" || user == "Cliente") {
      sesion(nombre, clave);
      setNombre("");
      setClave("");
    } else {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Seleccione si es Usuario o Administrador",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  return (
    <div className="min-h-screen flex flex-col gap-10 dark:bg-black dark:bg-opacity-80 dark:text-gray-500 items-center justify-center bg-salmon p-5 font-Source text-black">
      <Logo tamaño={"text-5xl"} />
      <form
        className="p-5 bg-salmon dark:bg-black border-4 border-azul  flex flex-col items-center justify-center gap-5 rounded-md text-xl"
        onSubmit={handleSubmit}
        method="post"
      >
        <h1 className="text-3xl">Inicio de Sesión</h1>
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
          required
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
