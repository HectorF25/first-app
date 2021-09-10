import React from "react";
import FooterComponent from "../components/modules/footerComponent";
import HeaderComponent from "../components/modules/headerComponent";
import PersonajesForm from "../components/personajes/personajesFormClass";
import TitlePage from "../components/titleView";
import "../assets/css/home.css";

function PersonajesViewForm() {
    return (
      <>
        <HeaderComponent />
        <TitlePage name="Personajes Star Wars Form"/>
        <div className="contenedor">
          <PersonajesForm />
        </div>
        <FooterComponent />
      </>
    );
  }
  export default PersonajesViewForm;