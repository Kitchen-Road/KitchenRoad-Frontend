import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageLogin from './pages/PageLogin';
import PageRegister from './pages/PageRegister';
import PageReceitas from './pages/PageReceitas';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/SignUP" component={PageRegister} />
                <Route path="/Login" component={PageLogin} />
                <Route path="/Receitas" component={PageReceitas} />

            </Switch>
        </BrowserRouter>
    );
} 