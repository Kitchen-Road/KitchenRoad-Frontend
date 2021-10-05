import React from "react";

const FormatDica = ({ dicaList }) => {
  return (
    <div>
      {dicaList.map((item) => (
        <div>
          {item.dicas.map((dica) => (
            <div>
              <h2 className="title-1">{dica.titulo}</h2>
              <p>{dica.conteudo_dica}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FormatDica;
