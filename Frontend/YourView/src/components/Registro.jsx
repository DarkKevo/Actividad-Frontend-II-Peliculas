import { useState } from "react";
import Swal from "sweetalert2";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import axios from "axios";
import {useMutation} from 'react-query'
function Registro() {
  const [user, setUser] = useState("");
  const [nombre, setNombre] = useState("");
  const [clave, setClave] = useState("");
  const [icon, setIcon] = useState(
    "data:image/jpeg;base64,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"
  );
  const [developer_password, setDeveloper_password] = useState("");
  /* Funcion para Cliente */
  const {mutate:mutateU}= useMutation((data)=>
  axios.post('http://localhost:3000/CreateUser',data),
    {
      onSuccess:(response)=>{
        console.log(response.data);
        localStorage.setItem(
          "currentUser",
          JSON.stringify({ nombre, clave, icon })
        );
        window.location.href = "/";
      },
      onError: (error) =>console.log(error),
    }
  )
  function registerU(nombre, clave, icon) {
    mutateU({nombre,clave,icon})
  }
  /* Funcion para Admin */
  const {mutate:mutateA}= useMutation((data)=>
  axios.post('http://localhost:3000/CreateAdmin',data),
    {
      onSuccess:(response)=>{
        console.log(response.data);
        localStorage.setItem(
          "currentUser",
          JSON.stringify({ nombre, clave, icon, developer_password })
        );
        window.location.href = "/";
      },
      onError: (error) =>console.log(error),
    }
  )
  function registerA(nombre, clave, icon, developer_password) {
    mutateA({nombre,clave,icon, developer_password})
  }
  /* SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "Cliente") {
      registerU(nombre, clave, icon);
      console.log("Cliente registrado");
      setNombre("");
      setClave("");
      setIcon("");
    } else if (user === "Administrador") {
      registerA(nombre, clave, icon, developer_password);
      console.log("Administrador registrado");
      setNombre("");
      setClave("");
      setIcon("");
      setDeveloper_password("");
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
    <div className="min-h-screen flex flex-col gap-10 dark:text-gray-500 dark:bg-black dark:bg-opacity-80 items-center justify-center bg-salmon p-5 font-Source text-black">
      <Logo tamaño={"text-5xl"} />
      <form
        className="p-5 bg-salmon dark:bg-black border-4  border-azul  flex flex-col items-center justify-center gap-5 rounded-md text-xl"
        onSubmit={handleSubmit}
        method="post"
      >
        <h1 className="text-3xl">Registro</h1>
        <select
          className="p-3  bg-white rounded-lg  text-black border-azul border-4 w-full"
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
          onChange={(e) => 
              setNombre(e.target.value)
          }
          className="p-3 bg-white rounded-lg border-azul border-4 w-full"
          type="text"
          placeholder="Ingrese su nombre"
          required
        />
        <input
          value={clave}
          onChange={(e) => 
            setClave(e.target.value)
          }
          className="p-3 bg-white rounded-lg border-azul border-4 w-full"
          type="password"
          placeholder="Ingrese una contraseña"
          required
        />
        <input
          className="p-3 bg-white rounded-lg border-azul border-4 w-full"
          value={icon}
          onChange={(e) => 
              setIcon(e.target.value)
          }
          type="text"
          placeholder="Icon"
        />
        <div
          className={user == "Administrador" ? "flex flex-col gap-3" : "hidden"}
        >
          <p className="text-sm">Ingrese su clave de Administrador</p>
          <input
            className="p-3 bg-white rounded-lg border-azul border-4 w-full"
            type="password"
            placeholder="ingrese clave"
            value={developer_password}
            onChange={(e) => setDeveloper_password(e.target.value)}
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
