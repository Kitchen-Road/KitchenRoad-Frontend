import React from "react";
import { Link } from "react-router-dom";
import frigideira from "../../assets/img/modoPreparo/frigideira.png";

const NavbarLogado = () => {
  return (
    <div className="navbar">
      <Link to="/receitas">
        <p className="label-nav">
          <img src={frigideira} /> vamos cozinhar
        </p>
      </Link>
      <Link to="/receitasConcluidas">
        <button className="btn-nav">
          Receitas Concluídas
        </button>
      </Link>
      <Link to="/">
        <button className="btn-nav" >
          Sair
        </button>
      </Link>
    </div>
  );
};

export default NavbarLogado;
