import API from "./constants.js";

const getReceitasJson = async (filtro, dificuldade) => {
  var url;
  if (dificuldade === undefined) dificuldade = "";
  if (filtro === undefined) filtro = "";
  if (filtro === "" && dificuldade === "")
    url = API.HTTP + API.PORT + API.RECEITAS;
  else
    url =
      API.HTTP +
      API.PORT +
      API.RECEITAS +
      API.SEARCH +
      filtro +
      API.DIFICULDADE +
      dificuldade;
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
  getReceitas: async (filtro, dificuldade) => {
    return [
      {
        receitas: await getReceitasJson(filtro, dificuldade),
      },
    ];
  },
};
