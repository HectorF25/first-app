import React, { Fragment } from "react";
import Estudiante from "./estudianteComponent";

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
      <Estudiante nombre="Hector" edad='18' genero="Masculino" />
      <Estudiante nombre="Crsitian" edad='20' genero="Masculino" />
    </div>
  </Fragment>
);

export default NuevoElemento;
