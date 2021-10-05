import React from 'react';
import Form from '../utils/Form';


const Register = () => {
    const formInput = [
        {
            divClass : "sign-up",
            type: "text", 
            className: "inputUser", 
            placeholder: "Digite seu nome:" 
        },
    ]
    return (
        <div >
            <form>
                <h1 className="title">Criar conta</h1>

                <div className="sign-up">
                    <input type="text" className="inputUser" id="username" placeholder="Como você gostaria de ser chamado?" required/>
                </div>

                <div className="sign-up">
                    <input type="email" className="inputUser" id="email" placeholder="Digite sua email:" required/>
                </div>

                <div className="sign-up">
                    <input type="text" className="inputUser" id="password" placeholder="Digite sua senha:" required/>
                </div>

                <button className="button button-register">Cadastrar-se</button>
                <p className="or">Ou</p>
                <button className="button">Cadastrar-se com o Google</button>
                <p className="have-account">Já possui uma conta? <a href="#" id="link">Clique aqui</a></p>
            </form>
        </div>
    )
}

export default Register;