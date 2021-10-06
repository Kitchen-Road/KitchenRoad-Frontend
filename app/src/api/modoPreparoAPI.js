import API from "./constants.js";

const getModoDePreparoJson = async (id) => {
  var url = API.HTTP + API.PORT + API.RECEITAS + id + "/";
  const header = new Headers({
    "Content-Type": "application/json",
    Authorization: "Token " + API.TOKEN,
  });
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: header,
  });

  const json = await response.json();
  return json;
};

export default {
  getModoDePreparo: async (id) => {
    return await getModoDePreparoJson(id);
  },
};
