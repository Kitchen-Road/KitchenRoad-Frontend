import React from 'react';

const Login = () => {
    return (
        <form>
            <h1 className="title">Acessar conta</h1>
            <div>
                <label>Email</label>
                <input type="email" className="inputUser" required/>
            </div>

            <div>
                <label>Senha</label>
                <input type="text" className="inputUser" required/>
            </div>

            <button>Acessar conta</button>
        </form>
    )
}

export default Login;