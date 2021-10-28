import API from "./constants.js";

const concluirPOST = async (receita) => {
  if (receita === "") return "Erro";
  var url = API.HTTP + API.PORT + API.COZINHEIRO + API.CONCLUIR;

  const header = new Headers({
    "Content-Type": "application/json",
    Authorization: "Token " + API.TOKEN,
  });

  var raw = JSON.stringify({
    nome_receita: receita,
  });

  const response = await fetch(url, {
    method: "PATCH",
    headers: header,
    body: raw,
  });

  let resposta;
  resposta = await response;

  return resposta;
};

export default concluirPOST;
