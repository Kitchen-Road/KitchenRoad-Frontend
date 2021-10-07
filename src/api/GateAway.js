import API from "./constants.js";
import getDicaJson from "./dicasAPI.js";
import getReceitasJson from "./receitasAPI.js";

class GateAway {
  getDicas = getDicaJson;
  getReceitas = getReceitasJson;
}

// const signupPOST = async(url, body) => {
  
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", url, true)
//   xhr.setRequestHeader("Content-type", "application/json")
//   xhr.send(JSON.stringify(body))

//   return xhr.responseText
// }


export default GateAway;