import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import postLogin from "../../api/loginAPI";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loginBtn, setLoginBtn] = useState(false);
  const [retorno, setRetorno] = useState(false);

  useEffect(() => {
    const post = async () => {
      let response = await postLogin(email, senha);
      response.status == 200 ? setRetorno(true) : setRetorno(false);
    };
    post();
  }, [loginBtn]);

  const ConditionalLink = ({ children, to, condition }) =>
    condition ? <Link to={to}>{children}</Link> : <>{children}</>;

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
      <ConditionalLink to="/Receitas" condition={retorno} conditional link>
        <button
          onClick={() => setLoginBtn(!loginBtn)}
          className="button button-primary"
        >
          Acessar conta
        </button>
      </ConditionalLink>

      <div />
      <p className="have-account">Esqueceu sua senha? Clique aqui</p>
    </div>
  );
};

export default Login;
