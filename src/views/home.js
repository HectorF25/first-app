import React from 'react';
import NuevoElemento from '../components/nuevoElemento';
import FooterComponent from '../components/footerComponent';
import HeaderComponent from '../components/headerComponent';
import '../css/home.css';

function Home() {
    return(
    <div className="contendeor">
        <HeaderComponent/>
        <NuevoElemento/>
        <FooterComponent/>
    </div>
    )
};
export default Home;