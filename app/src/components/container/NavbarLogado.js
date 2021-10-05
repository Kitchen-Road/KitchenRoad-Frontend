import React from "react";
import { Link } from "react-router-dom";

const NavbarLogado = () => {
    return (
        <div className="navbar">
        <a className="label-nav" href="#">vamos cozinhar </a>
        <Link to="/SignUP"><button className="btn-nav">Sair</button></Link>
        </div>
    )
}

export default NavbarLogado;