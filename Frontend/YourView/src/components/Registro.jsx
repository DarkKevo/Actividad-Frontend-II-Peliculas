import { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import axios from "axios";

function Registro() {
  const [user, setUser] = useState("");
  const [nombreU, setNombreU] = useState("");
  const [claveU, setClaveU] = useState("");
  const [iconU, setIconU] = useState("");
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
        localStorage.setItem(
          "currentUser",
          JSON.stringify({ nombre, clave, icon})
        );
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
        localStorage.setItem(
          "currentUser",
          JSON.stringify({ nombre, clave, icon, developer_password })
        );
        window.location.href = "/inicio";
      })
      .catch((error) => console.log(error));
  }
  /* SUBMIT */
  const handleSubmit = (e)=>{
    e.preventDefault();
    if (user=='Cliente'){
      registerU(nombreU,claveU,iconU)
      console.log('Cliente registrado')
      setNombreU('')
      setClaveU('')
      setIconU('')
    }else{
      registerA(nombreA,claveA,iconA,developer_password)
      console.log('Administrador registrado')
      setNombreA("")
      setClaveA("")
      setIconA("")
      setDeveloper_password('')
    }
  }
  return (
    <div className="min-h-screen flex flex-col gap-10 dark:bg-black items-center justify-center bg-salmon p-5 font-Source text-black">
      <Logo tamaño={"text-5xl"} />
      <form
        className="p-5 bg-salmon border-4 border-azul  flex flex-col items-center justify-center gap-5 rounded-md text-xl"
        onSubmit={handleSubmit}
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
          value={nombreU}
          onChange={(e) => {setNombreU(e.target.value)
          setNombreA(e.target.value)}}
          className="p-3 bg-white rounded-lg border-azul border-4 w-full"
          type="text"
          placeholder="Ingrese su nombre"
          required
        />
        <input
        value={claveU}
        onChange={(e)=>{setClaveU(e.target.value)
        setClaveA(e.target.value)}}
          className="p-3 bg-white rounded-lg border-azul border-4 w-full"
          type="password"
          placeholder="Ingrese una contraseña"
          required
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
            onChange={(e)=>setDeveloper_password(e.target.value)}
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
