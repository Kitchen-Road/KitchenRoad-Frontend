import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageLogin from './pages/PageLogin';
import PageRegister from './pages/PageRegister';
import PageReceitas from './pages/PageReceitas';
import PageModoPreparo from "./pages/PageModoPreparo";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/SignUP" component={PageRegister} />
                <Route path="/Login" component={PageLogin} />
                <Route path="/Receitas" component={PageReceitas} />
                <Route path="/ModoDePreparo" component={PageModoPreparo} />


            </Switch>
        </BrowserRouter>
    );
} 