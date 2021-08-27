import React from "react";
import FooterComponent from "../components/modules/footerComponent";
import HeaderComponent from "../components/modules/headerComponent";
import Personajes from "../components/personajes/contentList";
import TitlePage from "../components/titleView";
import "../assets/css/home.css";

const PersonajesView = () => {
  return (
    <>
      <HeaderComponent />
      <TitlePage name="Personajes Star Wars"/>
      <div className="contenedor">
        <Personajes />
      </div>
      <FooterComponent />
    </>
  );
};

export default PersonajesView;
