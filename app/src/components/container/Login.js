import React, { useState, useEffect } from "react";

import Api from "../../api/GateAway";

const Login = () => {
  //const api = new Api();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  console.log(email);
  console.log(senha);

  const formInput = [
    {
      divClass: "sign-up",
      type: "text",
      className: "inputUser",
      placeholder: "Digite seu nome:",
    },
  ];
  return (
    <form>
      <h1 className="title">Acessar conta</h1>
      <div className="sign-up">
        {/* <label>Email</label> */}
        <input
          type="email"
          className="inputUser"
          placeholder="Digite seu email:"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="sign-up">
        {/* <label>Senha</label> */}
        <input
          type="text"
          className="inputUser"
          placeholder="Digite sua senha:"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
      </div>

      <button className="button button-primary">Acessar conta</button>
      <p className="have-account">Esqueceu sua senha? Clique aqui</p>
    </form>
  );
};

export default Login;
