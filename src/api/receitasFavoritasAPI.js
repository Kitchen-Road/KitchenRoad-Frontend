import API from "./constants.js";

const getReceitasFavJson = async () => {
  var url = API.HTTP + API.PORT + API.COZINHEIRO + API.LISTCONCLUIDAS;

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
  getReceitas: async () => {
    return [
      {
        receitas: await getReceitasFavJson(),
      },
    ];
  },
};
