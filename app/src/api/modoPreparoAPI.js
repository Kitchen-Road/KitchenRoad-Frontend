import API from "./constants.js";

const modoDePreparo = async ({id}) => {
    var url = API.HTTP + API.PORT + API.RECEITAS + id;
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
}

export default modoDePreparo;