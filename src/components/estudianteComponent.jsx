import React from "react";
import PropTypes from 'prop-types';

const estudiante = ({nombre,edad,genero}) => (
  <div className="contendeor">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Estudiante</h5>
        <h6 class="card-subtitle mb-2 text-muted">{ nombre }</h6>
        <p class="card-text">
          Info estudiante. La edad es: { edad }. El genero es: { genero } 
        </p>
      </div>
    </div>
  </div>
);

estudiante.propTypes = { 
    nombre: PropTypes.string,
    edad: PropTypes.number,
    genero: PropTypes.string
};

estudiante.defaultProps = {
    nombre: "No tiene nombre"
}

export default estudiante;
