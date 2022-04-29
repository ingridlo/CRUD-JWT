
CREATE DATABASE login_usuarios;
CREATE SCHEMA main; 
CREATE SEQUENCE id_usuario;

CREATE TABLE usuarios(
    id INT NOT NULL DEFAULT NEXTVAL ('id_usuario'),
    nombre_usuario TEXT UNIQUE,
    password TEXT NOT NULL,
    PRIMARY KEY (id)
);