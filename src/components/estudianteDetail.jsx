import React, { Fragment } from "react";
import EstudiantesArray from "./estudiantesArray";
import { useParams } from "react-router-dom";

const EstudianteDetalle = () => {
  const { id } = useParams();
  const estudiante = EstudiantesArray.filter(
    (item) => item.id === parseInt(id)
  )[0];

  return (
    <Fragment>
      <div className="content-form">
        {estudiante ? (
          <div className="cards-list">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Estudiante</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {estudiante.nombre}
                </h6>
                <p className="card-text">
                  Info estudiante.
                  <br />
                  La edad es: {estudiante.edad}.<br />
                  El genero es: {estudiante.genero}.<br />
                  <a href={`/`}>Ver todos</a>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <h1>El Id no esta registrado.</h1>
        )}
      </div>
    </Fragment>
  );
};
export default EstudianteDetalle;
