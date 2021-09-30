import React from "react";

import Button from "../utils/button";
import List from "../utils/List";

import Logo from "../../assets/img/logo";

const Navbar = () => {

    const listObject = [
        {text: "Sobre"},
        {text: "Comunidade"},
        {text: "Contato"},
    ]

    return (
        <header className="header">
             <Logo width="70" height="70"/>

            <nav>
                <List listObject={listObject}/>
            </nav>

            <div className="nav-buttons">
                <Button style="btn-register" text="entrar"  />
                <Button style="btn-login" text="cadastrar" />
            </div>
        </header>
    )
}

export default Navbar;