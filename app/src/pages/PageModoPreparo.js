import NavbarLogado from "../components/container/NavbarLogado.js";
import Video from "../components/utils/Video.js";
import ListaModoPreparo from "../components/utils/ListaModoPreparo.js";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getModoDePreparo from "../api/modoPreparoAPI.js";

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
    link_video_receita: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
          <h2 className="title">{receita.nome_receita}</h2>
          <h3 className="title-2">{receita.categoria}</h3>
          <Video link={receita.link_video_receita} />
          <p>{formatExperienciaReceita(receita.dificuldade)}</p>
        </div>
        <ListaModoPreparo title="Ingredientes" value={receita.ingredientes} />
        <ListaModoPreparo
          title="Modo de preparo"
          value={receita.modo_preparo}
        />
      </main>
    </div>
  );
}

export default PageModoPreparo;
