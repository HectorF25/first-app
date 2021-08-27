import React from 'react';
import NuevoElemento from '../components/nuevoElemento';
import FooterComponent from '../components/modules/footerComponent';
import HeaderComponent from '../components/modules/headerComponent';
import '../assets/css/home.css';

function Home() {
    return(
    <div className="contenedor">
        <HeaderComponent/>
        <NuevoElemento/>
        <FooterComponent/>
    </div>
    )
};
export default Home;