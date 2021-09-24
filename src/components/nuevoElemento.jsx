import React, { Fragment } from "react";
import Estudiante from "./estudianteComponent";
import EstudiantesArray from "./estudiantesArray";

const NuevoElemento = () => (
  
  <Fragment>
    <div className="content-form">
      <h3>Estudiantes</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
        assumenda sint totam, nostrum tenetur voluptate laboriosam labore
        ratione et odio ea quisquam officiis soluta, temporibus quasi! Neque ad
        rem eum!
      </p>
      {
            EstudiantesArray.map ( item => <Estudiante nombre = { item.nombre } edad = { item.edad } genero = { item.genero } id = {item.id}/>)
      }
    </div>
  </Fragment>
);

export default NuevoElemento;
