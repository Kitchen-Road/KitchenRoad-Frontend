import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";

import Api from "../../api/GateAway";
import postLogin from '../../api/loginAPI';

const Login = () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const post = async () => await postLogin();
  
  console.log(email);
  console.log(senha);

  const redirecionar = () => {
  
    if(post)
    <Redirect to="/Receitas" />
  }

  useEffect(() => {
    redirecionar();
  }, [post]);

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
          type="password"
          className="inputUser"
          placeholder="Digite sua senha:"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
      </div>

      <button onClick={ () => post(email, senha) }className="button button-primary">Acessar conta</button>
      <p className="have-account">Esqueceu sua senha? Clique aqui</p>
    </form>
  );
};

export default Login;
