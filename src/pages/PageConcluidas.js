import Receitas from "../components/container/receitas.js";
import NavbarLogado from "../components/container/NavbarLogado.js";
import Footer from "../components/container/footer.js";
import getReceitas from "../api/receitasFavoritasAPI";
import React, { useState, useEffect } from "react";

function formatDificuldade(dificuldade) {
  var xp;
  switch (dificuldade) {
    case "F":
      xp = "Iniciante";
      break;
    case "M":
      xp = "Intermediária";
      break;
    case "D":
      xp = "Avançada";
      break;
  }
  return xp;
}

function PageReceitas() {
  const [receitaList, setReceitasList] = useState([]);

  useEffect(() => {
    const loadReceitas = async () => {
      let list = [];
      list = await getReceitas.getReceitas();
      setReceitasList(list);
    };
    loadReceitas();
  }, []);

  return (
    <>
      <div className="App">
        <NavbarLogado />

        <div className="title-1">Receitas Concluidas</div>

        <Receitas receitaList={receitaList} />
      </div>
      <Footer />
    </>
  );
}

export default PageReceitas;
