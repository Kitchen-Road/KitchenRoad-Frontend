import API from "./constants.js";

const loginPOST = async () => {
  var url = API.HTTP + API.PORT + API.COZINHEIRO + API.LOGIN;
  const header = new Headers({
    "Content-Type": "application/json",
    Authorization: "Token " + API.TOKEN,
  });
  const response = await fetch(url, {
    method: "POST",
    headers: header,
  });
  const json = await response.json();
  console.log(json);
  return json;
};

export default {
  postLogin: async () => {
    return [
      {
        dicas: await loginPOST(),
      },
    ];
  },
};