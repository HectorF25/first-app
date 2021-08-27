import React, { useState } from "react";
import FooterComponent from "../components/modules/footerComponent";
import HeaderComponent from "../components/modules/headerComponent";
import Estudiantes from "../components/estudiantes/estudiantesComponent";
import ListaEstudiantes from "../components/estudiantes/estudentList";
import '../assets/css/home.css';

const EstudiantesView = () => {
  const [list, setList] = useState([]);
  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };
  return (
    <div className="contenedor">
      <HeaderComponent />
        <Estudiantes handleAddItem={handleAddItem} />
        <ListaEstudiantes list={list} setList={setList}  />
      <FooterComponent />
    </div>
  );
};

export default EstudiantesView;
