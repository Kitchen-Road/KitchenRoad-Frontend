import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="content">
                <h2 className="title-content">Quem somos</h2>
                <Link to="/EmConstrucao"><p>Equipe</p></Link>
                <Link to="/EmConstrucao"><p>Entre em contato</p></Link>
                <Link to="/EmConstrucao"><p>Missão</p></Link>
            </div>
            <div className="content">
                <h2 className="title-content">Social</h2>
                <Link to="/EmConstrucao"><p>Instagram</p></Link>
                <Link to="/EmConstrucao"><p>Facebook</p></Link>
                <Link to="/EmConstrucao"><p>Twitter</p></Link>
            </div>
            <div className="content">
                <h2 className="title-content">Termo de privacidade</h2>
                <Link to="/EmConstrucao"><p>Termos de uso</p></Link>
                <Link to="/EmConstrucao"><p>Privacidade</p></Link>
            </div>
            <div className="content">
                <h2 className="title-content">Ajuda e suporte</h2>
                <Link to="/EmConstrucao"><p>Dúvidas frequentes</p></Link>
                <Link to="/EmConstrucao"> <p>Fórum</p></Link>
                <Link to="/EmConstrucao"><p>Entre em contato</p></Link>
            </div>
        </footer>
    )
}

export default Footer;
