import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="content">
                <h2 className="title-content">Quem somos</h2>
                <p>Equipe</p>
                <p>Entre em contato</p>
                <p>Missão</p>
            </div>
            <div className="content">
                <h2 className="title-content">Social</h2>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
            </div>
            <div className="content">
                <h2 className="title-content">Termo de privacidade</h2>
                <p>Termos de uso</p>
                <p>Privacidade</p>
            </div>
            <div className="content">
                <h2 className="title-content">Ajuda e suporte</h2>
                <p>Dúvidas frequentes</p>
                <p>Fórum</p>
                <p>Entre em contato</p>
            </div>
        </footer>
    )
}

export default Footer;
