import NavbarLogado from "../components/container/NavbarLogado.js";
import Video from "../components/utils/Video.js";
import ListaModoPreparo from "../components/utils/ListaModoPreparo.js";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getModoDePreparo from "../api/modoPreparoAPI.js";
import panelaReceita from '../assets/img/modoPreparo/panela-receita.png'
import panelaModoPreparo from '../assets/img/modoPreparo/panela-modo-preparo.png'
import conchaIngredientes from '../assets/img/modoPreparo/concha-ingredientes.png'

function formatExperienciaReceita(dificuldade) {
  var xp;
  switch (dificuldade) {
    case "I":
      xp = "Iniciante";
      break;
    case "T":
      xp = "Intermediária";
      break;
    case "A":
      xp = "Avançada";
      break;
  }
  return xp;
}

function PageModoPreparo() {
  const { id } = useParams();
  const [receita, setReceita] = useState({
    nome_receita: "-----",
    categoria: "-----",
    link_video_receita: "https://www.youtube.com/embed/j5a0jTc9S10",
    ingredientes: "----\r\n3 ----\r\n----\r\n -----.",
    modo_preparo: "------\n-----.\n -------.\n-------.\n-------",
    dificuldade: "--------",
  });

  useEffect(() => {
    const loadModoPreparo = async () => {
      let preparo;
      preparo = await getModoDePreparo.getModoDePreparo(id);
      setReceita(preparo);
    };
    loadModoPreparo();
  }, []);

  return (
    <div className="App">
      <NavbarLogado />
      <main>
        <Link to="/Receitas">
          <button className="btn-black">voltar</button>{" "}
        </Link>
        <div className="topic">
          <div className="title-modo">
            <img class="img-label" src={panelaReceita}/>
            <h2 className="title">{receita.nome_receita}</h2>
          </div>
          <h3 className="title-2">{receita.categoria}</h3>
          <Video link={receita.link_video_receita} />
          <p>{formatExperienciaReceita(receita.dificuldade)}</p>
        </div>
        <ListaModoPreparo 
        title="Ingredientes" 
        value={receita.ingredientes} 
        img={conchaIngredientes}
        />
        <ListaModoPreparo
          title="Modo de preparo"
          value={receita.modo_preparo}
          img={panelaModoPreparo}
        />
      </main>
    </div>
  );
}

export default PageModoPreparo;
