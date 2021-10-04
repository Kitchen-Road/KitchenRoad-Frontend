import React from "react";

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
              <div className="receita-item">
                <img
                  className="image-box"
                  src={result.imagem}
                  alt="Houve um erro ao carregar a imagem"
                />
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
