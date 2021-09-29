import React from "react";
import './Navbar.css'

const Navbar = () => {
    return (
        <header className="header">
            <a className="logo" href="/" >Kitchen Road</a>
            <nav>
                <ul className="nav-list">
                    <li><a href="/">Sobre</a></li>
                    <li><a href="/">Comunidade</a></li>
                    <li><a href="/">Contato</a></li>
                </ul>
            </nav>
            <div className="nav-buttons">
                <button className="btn btn-register">Cadastrar</button>
                <button className="btn btn-login">Entrar</button>
            </div>
        </header>
    )
}

export default Navbar;