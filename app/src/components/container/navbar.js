import React from "react";

import Button from "../utils/button";
import List from "../utils/List";

// import Logo from "../../assets/img/logo.js";
import Logo from "../../assets/img/logo.png";

const Navbar = () => {

    const listObject = [
        {text: "Sobre"},
        {text: "Comunidade"},
        {text: "Contato"},
        {text: "Entrar"},
        {text: "Cadastrar"},
    ]

    return (
        <>
        <div className="logo">
            {/* <Logo  width="70" height="70"/> */}
            <img src={Logo} width="70" height="70"></img>
        </div>

        <header className="header">
            <nav>
                <List listObject={listObject}/>
            </nav>
        </header>
        </>
    )
}

export default Navbar;