import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageLogin from './pages/PageLogin';
import PageRegister from './pages/PageRegister';
import PageReceitas from './pages/PageReceitas';
import PageModoPreparo from "./pages/PageModoPreparo";
import Home from "./pages/home";
import PageConstrucao from './pages/PageContrucao'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/SignUP" component={PageRegister} />
                <Route path="/Login" component={PageLogin} />
                <Route path="/Receitas" component={PageReceitas} />
                <Route path="/Receitas" component={PageReceitas} />
                <Route path="/ModoDePreparo/:id" component={PageModoPreparo} />
                <Route path="/EmConstrucao" component={PageConstrucao} />
            </Switch>
        </BrowserRouter>
    );
} 