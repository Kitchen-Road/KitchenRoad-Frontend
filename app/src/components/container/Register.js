import { Link } from "react-router-dom";
import registerPOST from "../../api/signupAPI";
import React, { useState, useEffect } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [registerBtn, setRegisterBtn] = useState(false);

  useEffect(() => {
    const post = async () => {
      let response = await registerPOST(username, email, senha);
      console.log(response.status);
    };
    post();
  }, [registerBtn]);
  return (
    <div>
      <div>
        <h1 className="title-1-red">Criar conta</h1>

        <div className="sign-up">
          <input
            type="text"
            className="inputUser"
            placeholder="Como gostaria de ser chamado?"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

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
          className="button button-register"
          onClick={() => setRegisterBtn(!registerBtn)}
        >
          Cadastrar-se
        </button>
        <p className="or">Ou</p>
        <Link to="/EmConstrucao">
          {" "}
          <button className="button">Cadastrar-se com o Google</button>
        </Link>
        <p className="have-account">
          Já possui uma conta?{" "}
          <a href="/Login" id="link">
            Clique aqui
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
