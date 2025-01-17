import React from "react";
import { Link } from 'react-router-dom';

import '../css/Header.css';
import file from '../image/file.png';

const Header = () => {


    return (
        <div className="header">
            <div className="logo"><img src={file} alt="logo do site" /></div>
            <ul className="div-menu-nav">
                <Link className="menu-nav" to={'/consultores'}>Consultores</Link>
                <Link className="menu-nav" to={'/meus-dados'}>Meus dados</Link>
                <Link className="menu-nav">ajuda</Link>
            </ul>
            <div className="menu-user"> <button>Entrar</button></div>
        </div>
    ) 
};

export default Header;