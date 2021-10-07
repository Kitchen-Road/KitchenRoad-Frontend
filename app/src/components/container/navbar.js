import React from "react";
import { Link } from "react-router-dom";
import Button from "../utils/button";
import List from "../utils/List";

// import Logo from "../../assets/img/logo.js";
import Logo from "../../assets/img/logo.png";

const Navbar = () => {

    const listObject = [
        {text: "Sobre", link:'/EmConstrucao'},
        {text: "Comunidade", link:'/EmConstrucao'},
        {text: "Contato", link:'/EmConstrucao'},
        {text: "Entrar", link:'/Login'},
        {text: "Cadastrar", link:'/SignUP'},
    ]

    return (
        <div className = "navbar">
            {/* <Logo  width="70" height="70"/> */}
            <Link to="/"><img src={Logo} width="70" height="68.29"></img></Link>
        <header className="header">
            <nav>
                <List listObject={listObject}/>
            </nav>
        </header>
        </div>
    )
}

export default Navbar;