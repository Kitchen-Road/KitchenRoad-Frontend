import React, { useState, useEffect, useCallback } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

import Api from "../../api/GateAway";
import postLogin from "../../api/loginAPI";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loginBtn, setLoginBtn] = useState(false);

  useEffect(() => {
    const post = async () => {
      let response = await postLogin(email, senha);
      console.log(response.status);
    };
    post();
  }, [loginBtn]);

  return (

    <div>
      <h1 className="title">Acessar conta</h1>

      <div className="sign-up">
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
        <input
          type="password"
          className="inputUser"
          placeholder="Digite sua senha:"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
      </div>

      <button
        onClick={() => setLoginBtn(!loginBtn)}
        className="button button-primary"
      >
        Acessar conta
      </button>
      <p className="have-account">Esqueceu sua senha? Clique aqui</p>
    </div>

  );
};

export default Login;
