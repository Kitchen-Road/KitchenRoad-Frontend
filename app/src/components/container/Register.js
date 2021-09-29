import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <form>
            <h1 className="title">Criar conta</h1>
            <div className="sign-up">
                {/* <label >Digite seu nome:</label> */}
                <input type="text" className="inputUser" placeholder="Digite seu nome:" required/>
            </div>

            <div className="sign-up">
                {/* <label>Digite seu email:</label> */}
                <input type="email" className="inputUser" placeholder="Digite seu email:" required/>
            </div>

            <div className="sign-up">
                {/* <label>Digite sua senha:</label> */}
                <input type="text" className="inputUser" placeholder="Digite sua senha:" required/>
            </div>

            <button>Cadastrar-se</button>
            <p>Ou</p>
            <button>Cadastrar-se com o Google</button>
            <p>Já possui uma conta? <a href="#" id="link">Clique aqui</a></p>
        </form>
    )
}

export default Register;