-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema PeliculasBD
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema PeliculasBD
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `PeliculasBD` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci ;
USE `PeliculasBD` ;

-- -----------------------------------------------------
-- Table `PeliculasBD`.`Genero`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PeliculasBD`.`Genero` (
  `idGenero` INT NOT NULL AUTO_INCREMENT,
  `Genero` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`idGenero`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PeliculasBD`.`Peliculas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PeliculasBD`.`Peliculas` (
  `idPelicula` INT NOT NULL AUTO_INCREMENT,
  `Genero` INT NOT NULL,
  `Titulo` VARCHAR(105) NOT NULL,
  `Sinopsis` VARCHAR(10000) NOT NULL,
  `URL_pelicula` TEXT NOT NULL,
  `Imagen` VARCHAR(45) NOT NULL,
  `Fecha_Publicacion` DATE NOT NULL,
  `Actores_Principales` VARCHAR(100) NOT NULL,
  `Directores` VARCHAR(100) NOT NULL,
  `Franquicia` VARCHAR(100) NOT NULL,
  `Review` JSON DEFAULT ('[]'),
  PRIMARY KEY (`idPelicula`),
  INDEX `fk_genero` (`Genero` ASC) VISIBLE,
  CONSTRAINT `fk_generos`
    FOREIGN KEY (`Genero`)
    REFERENCES `PeliculasBD`.`Genero` (`idGenero`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PeliculasBD`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PeliculasBD`.`Usuarios` (
  `idUsuarios` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(150) NOT NULL,
  `clave` VARCHAR(150) NOT NULL,
  `icon` VARCHAR(15000) NOT NULL,
  PRIMARY KEY (`idUsuarios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PeliculasBD`.`Administradores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PeliculasBD`.`Administradores` (
  `idAdministradores` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(150) NOT NULL,
  `clave` VARCHAR(150) NOT NULL,
  `icon` VARCHAR(10000) NOT NULL,
  PRIMARY KEY (`idAdministradores`))
ENGINE = InnoDB;

INSERT INTO `peliculasbd`.`genero` (`Genero`) VALUES ('Accion');
INSERT INTO `peliculasbd`.`genero` (`Genero`) VALUES ('Drama');
INSERT INTO `peliculasbd`.`genero` (`Genero`) VALUES ('Terror');
INSERT INTO `peliculasbd`.`genero` (`Genero`) VALUES ('Suspenso');
INSERT INTO `peliculasbd`.`genero` (`Genero`) VALUES ('Comedia');
INSERT INTO `peliculasbd`.`genero` (`Genero`) VALUES ('Drama');
INSERT INTO `peliculasbd`.`genero` (`Genero`) VALUES ('Fantasia');
INSERT INTO `peliculasbd`.`genero` (`Genero`) VALUES ('Musical');
INSERT INTO `peliculasbd`.`genero` (`Genero`) VALUES ('Ciencia-Ficcion');
INSERT INTO `peliculasbd`.`genero` (`Genero`) VALUES ('Documental');

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
