import React from "react";
import { Link } from "react-router-dom";
import frigideira from '../../assets/img/modoPreparo/frigideira.png'

const NavbarLogado = () => {
    return (
        <div className="navbar">
        <p className="label-nav"> <img src={frigideira}/> vamos cozinhar</p>
        <Link to="/"><button className="btn-nav">Sair</button></Link>
        </div>
    )
}

export default NavbarLogado;