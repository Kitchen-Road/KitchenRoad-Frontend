import API from "./constants.js";

const loginPOST = async (email, senha) => {

  var url = API.HTTP + API.PORT + API.COZINHEIRO + API.LOGIN;

  const header = new Headers({
    "Content-Type": "application/json",
    Authorization: "Token " + API.TOKEN,
  });

  const formdata = new FormData();
  formdata.append("username", String(email));
  formdata.append("email", String(email));
  formdata.append("password", String(senha));

  var raw = JSON.stringify({
    "username": "brenno.silva037@gmail.com",
    "email": "brenno.silva037@gmail.com",
    "password": "senhaheroku2021"
  });

  const response = await fetch(url, {
    method: "POST",
    headers: header,
    body : raw
  });
  const json = await response.json();
  console.log("ALOHA")
  console.log(json);
  return json;
};

export default loginPOST;