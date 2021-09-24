import React from "react";
import FooterComponent from "../components/modules/footerComponent";
import HeaderComponent from "../components/modules/headerComponent";
import TitlePage from "../components/titleView";
import ContactForm from "../components/contactForm";
import "../assets/css/home.css";

function Contact() {
  return (
    <>
      <HeaderComponent />
      <TitlePage name="Contact Form" />
      <div className="contenedor">
        <ContactForm />
      </div>
      <FooterComponent />
    </>
  );
}
export default Contact;
