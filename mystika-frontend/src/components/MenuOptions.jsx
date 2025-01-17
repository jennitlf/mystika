import React from "react";
import { Link } from "react-router-dom";
import '../css/menuOptions.css'

const MenuOptions = ({ setMenuActive}) => {

    const onClick = () => {
        setMenuActive(false)
    }

    return(
        <div className="menu-options-m">
            <ul >
                <Link to={`/consultores`} className="options-m" onClick={onClick}>Consultores</Link>
                <Link className="options-m" to={`/meus-dados`} onClick={onClick}>Meus dados</Link>
                <Link className="options-m" onClick={onClick}>ajuda</Link>
            </ul>
            <button>
                entrar
            </button>
        </div>
    )
};

export default MenuOptions;