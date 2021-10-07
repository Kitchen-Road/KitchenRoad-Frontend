import API from "./constants.js";

const registerPOST = async (username, email, senha) => {
  if ((username === "") | (email === "") | (senha === "")) return "Erro";
  var url = API.HTTP + API.PORT + API.COZINHEIRO + API.SINGUP;

  const header = new Headers({
    "Content-Type": "application/json",
  });

  var raw = JSON.stringify({
    username: username,
    email: email,
    password: senha,
  });

  const response = await fetch(url, {
    method: "POST",
    headers: header,
    body: raw,
  });

  let resposta;
  resposta = await response;
  return resposta;
};

export default registerPOST;
