import React from "react";
import Estudiante from './estudianteComponent'

const NuevoElemento = () => (
  <div className="contendeor">
    <h3>Estudiantes</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque assumenda
      sint totam, nostrum tenetur voluptate laboriosam labore ratione et odio ea
      quisquam officiis soluta, temporibus quasi! Neque ad rem eum!
    </p>
    <Estudiante nombre="Hector" edad="18" genero="Masculino" />
    <Estudiante nombre="Hector" edad="18" genero="Masculino" />
  </div>
);

export default NuevoElemento;
