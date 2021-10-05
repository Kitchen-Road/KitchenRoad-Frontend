import React from 'react';
import form from '../utils/form';


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
                    {/* <label>Digite seu email:</label> */}
                    <input type="text" className="inputUser" placeholder="Como você gostaria de ser chamado?" required/>
                </div>

                <div className="sign-up">
                    {/* <label>Digite sua senha:</label> */}
                    <input type="email" className="inputUser" placeholder="Digite sua email:" required/>
                </div>

                <div className="sign-up">
                    {/* <label>Digite sua senha:</label> */}
                    <input type="password" className="inputUser" placeholder="Digite sua senha:" required/>
                </div>

                <button className="button button-register">Cadastrar-se</button>
                <p className="or">Ou</p>
                <button className="button">Cadastrar-se com o Google</button>
                <p className="have-account">Já possui uma conta? <a href="/Login" id="link">Clique aqui</a></p>
            </form>
        </div>
    )
}

export default Register;