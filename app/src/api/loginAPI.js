import API from "./constants.js";

const loginPOST = async (email, senha) => {
  if ((email === "") | (senha === "")) return "Erro";
  var url = API.HTTP + API.PORT + API.COZINHEIRO + API.LOGIN;

  const header = new Headers({
    "Content-Type": "application/json",
  });

  var raw = JSON.stringify({
    username: email,
    password: senha,
  });

  const response = await fetch(url, {
    method: "POST",
    headers: header,
    body: raw,
  });

  let resposta;
  resposta = await resposta;
  return resposta;
};

export default loginPOST;
