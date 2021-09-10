import React from "react";
import FooterComponent from "../components/modules/footerComponent";
import HeaderComponent from "../components/modules/headerComponent";
import TitlePage from "../components/titleView";
import "../assets/css/home.css";

function page404() {
  return (
    <>
      <HeaderComponent />
      <TitlePage name="404-Page" />
      <div className="contenedor">
        <h1>Error 404!</h1>
      </div>
      <FooterComponent />
    </>
  );
}
export default page404;
