import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { FaMoon, FaRegSun } from "react-icons/fa";
import Nav from "./components/Nav";
import Inicio from "./components/Inicio";
import Pelicula from "./components/Pelicula";
import InicioS from "./components/InicioS";
import Registro from "./components/Registro";
import GenericNotFound from "./components/GenericNotFound";
import "./App.css";
/* CON QUERY */
import { QueryClient, QueryClientProvider} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import User from './Practica/User'
//Crear cliente
const queryClient= new QueryClient()
function App() {
  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <div className={`min-h-scree font-Source ${darkToggle && "dark"}`}>
      <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Routes>
        {/* <Route path="/" element={<User />} /> */}
          <Route path="/" element={<InicioS />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/" element={<Nav />}>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/movie/:id" element={<Pelicula />} />
          </Route>
          <Route path="*" element={<GenericNotFound />} />
        </Routes>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <div
        onClick={() => setDarkToggle(!darkToggle)}
        className="w-16 h-16 p-3 fixed bottom-5 right-3 rounded-full flex items-center justify-center bg-azul transition-all duration-400 dark:bg-oscuro dark:border-2 border-salmon text-4xl text-white"
      >
        <FaMoon className="dark:hidden" />
        <FaRegSun className="hidden dark:block" />
      </div>
    </div>
  );
}

export default App;
