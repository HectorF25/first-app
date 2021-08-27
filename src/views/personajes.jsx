import React from "react";
import FooterComponent from "../components/modules/footerComponent";
import HeaderComponent from "../components/modules/headerComponent";
import Personajes from "../components/personajes/contentList";
import "../assets/css/home.css";

const PersonajesView = () => {
  return (
    <>
      <HeaderComponent />
      <div className="contenedor">
        <Personajes />
      </div>
      <FooterComponent />
    </>
  );
};

export default PersonajesView;
