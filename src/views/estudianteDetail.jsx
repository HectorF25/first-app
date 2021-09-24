import React from "react";
import EstudianteD from "../components/estudianteDetail";
import FooterComponent from "../components/modules/footerComponent";
import HeaderComponent from "../components/modules/headerComponent";
import TitlePage from "../components/titleView";
import "../assets/css/home.css";

function Home() {
  return (
    <>
      <HeaderComponent />
      <TitlePage name="Home-Page" />
      <div className="contenedor">
        <EstudianteD />
      </div>
      <FooterComponent />
    </>
  );
}
export default Home;
