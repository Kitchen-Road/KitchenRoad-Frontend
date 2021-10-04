const getReceitasJson = async (filtro) => {
  var url;
  if (filtro === undefined) url = "http://localhost:8000/receitas/";
  else url = "http://localhost:8000/receitas/?search=" + filtro;
  const header = new Headers({
    "Content-Type": "application/json",
    Authorization:
      "Token " +
      "c3826b8e69f597478e0bad01d10ce71b370eee97d64ccccd71b3eca3a803bbe8",
  });
  const response = await fetch(url, {
    method: "GET",
    headers: header,
  });
  const json = await response.json();
  return json;
};

export default {
  getReceitas: async (filtro) => {
    return [
      {
        receitas: await getReceitasJson(filtro),
      },
    ];
  },
};
