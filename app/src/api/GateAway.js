import API from "./constants.js";

const $username = document.querySelector("#username").value;
const $email = document.querySelector("#email").value;
const $password = document.querySelector("#password").value;
// const $button = document.querySelector(".button-register");

const signupPOST = async(url, body) => {
  
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true)
  xhr.setRequestHeader("Content-type", "application/json")
  xhr.send(JSON.stringify(body))

  return xhr.responseText
}

const registerUser = () => {
  var url = API.HTTP + API.PORT + API.COZINHEIRO + API.SINGUP;
  const body = {
  "username": $username,
  "email": $email,
  "password": $password
}
  signupPOST(url, body);
}
