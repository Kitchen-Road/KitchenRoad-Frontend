import API from "./constants.js";

const getDicaJson = async () => {
  var url = API.HTTP + API.PORT + API.DICA;
  const header = new Headers({
    "Content-Type": "application/json",
    Authorization: "Token " + API.TOKEN,
  });
  const response = await fetch(url, {
    method: "GET",
    headers: header,
  });
  const json = await response.json();
  return json;
};

export default {
  getDica: async () => {
    return [
      {
        dicas: await getDicaJson(),
      },
    ];
  },
};
