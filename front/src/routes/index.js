import React from 'react';
import { Switch } from 'react-router-dom';
import Auth from './Auth';

import Home from '../pages/home';
import Login from '../pages/login';
import registerProduct from '../pages/registerProduct';

function Routes() {
    return (
        <div>
            <Switch>
                <Auth exact path="/" component={Login} />
                <Auth exact path="/home" component={Home} isPrivate />
                <Auth exact path="/cadastro" component={registerProduct} isPrivate />
                <Auth exact path="/" component={() => <h1>Página não existe</h1>} />
            </Switch>
        </div>
    )
}
export default Routes;