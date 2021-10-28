import React from "react";
import { Link } from "react-router-dom";
import MaskImg from "../utils/MaskImg";

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
      <section>
        {receitaList.map((item, key) => (
          <div className="receitas-grid">
            {item.receitas.map((result, key) => (
              
              <div className="receita-item" >
                <Link to={`ModoDePreparo/${result.id}`}>
                <MaskImg id={result.id}/>{console.log(result.id)}
                <div className="title-receita">{result.nome_receita}</div>
                <div className="title-dificuldade">
                  Dificuldade: {formatExperiencia(result.dificuldade)}
                </div>
                </Link>
              </div>
              
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Receitas;
