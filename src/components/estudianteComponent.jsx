import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const estudiante = ({nombre,edad,genero,id}) => (
  <div className="cards-list">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Estudiante</h5>
        <h6 className="card-subtitle mb-2 text-muted">{ nombre }</h6>
        <p className="card-text">
          Info estudiante.<br/> La edad es: { edad }.<br/>El genero es: { genero }.<br/><Link to={`/estudiantesDetail/${id}`}>Detalle del estudiante</Link>  
        </p>
      </div>
    </div>
  </div>
);

estudiante.propTypes = { 
    nombre: PropTypes.string,
    edad: PropTypes.string,
    genero: PropTypes.string,
    id: PropTypes.number
};

estudiante.defaultProps = {
    nombre: "No tiene nombre"
}

export default estudiante;
