import API from "./constants.js";
import dicas from "./dicasAPI.js";
import receitas from "./receitasAPI.js";

class GateAway {
  getDicas = () => dicas();
  getReceitas = () => receitas();
  
}

// const signupPOST = async(url, body) => {
  
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", url, true)
//   xhr.setRequestHeader("Content-type", "application/json")
//   xhr.send(JSON.stringify(body))

//   return xhr.responseText
// }

const registerUser = () => {
  var url = API.HTTP + API.PORT + API.COZINHEIRO + API.SINGUP;
  const body = {
  "username": $username,
  "email": $email,
  "password": $password
}
  signupPOST(url, body);
}


export default GateAway;