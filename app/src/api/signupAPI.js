import API from "./constants.js";

const signupPOST = async () => {
  var url = API.HTTP + API.PORT + API.COZINHEIRO + API.SINGUP;
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
  postSignup: async () => {
    return [
      {
        dicas: await signupPOST(),
      },
    ];
  },
};