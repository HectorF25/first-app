import React from 'react';
import FooterComponent from '../components/footerComponent';
import HeaderComponent from '../components/headerComponent';
import '../css/home.css';

function Info() {
    return(
    <div className="contenedor">
        <HeaderComponent/>
        <FooterComponent/>
    </div>
    )
};
export default Info;