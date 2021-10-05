import React from "react";
import { Link } from "react-router-dom";

const NavbarLogado = () => {
    return (
        <div className="navbar">
        <p className="label-nav">vamos cozinhar</p>
        <Link to="/Login"><button className="btn-nav">Sair</button></Link>
        </div>
    )
}

export default NavbarLogado;