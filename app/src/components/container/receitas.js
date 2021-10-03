import React from "react";

import Search from "./search";

function formatExperiencia(dificuldade) {
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

const Receitas = ({ receitaList }) => {
  return (
    <div>
      <div className="title-1">Receitas</div>
      <Search />
      <section>
        {receitaList.map((item, key) => (
          <div className="receitas-grid">
            {item.receitas.map((result, key) => (
              <div className="receita-item">
                <img className="image-box" src={result.imagem} />
                <div className="title-receita">{result.nome_receita}</div>
                <div className="title-dificuldade">
                  Dificuldade: {formatExperiencia(result.dificuldade)}
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Receitas;
