function Logo({tamaño}) {
  return(
    <h1
    style={{ textShadow: "3px 2px 1px #58287F" }}
    className={tamaño + " text-azul font-oswald"}
  >
    AllMovies
  </h1>
  )
}

export default Logo;