import React from 'react';
import { Switch } from 'react-router-dom';
import Auth from './Auth';

import Home from '../pages/home';
import Login from '../pages/login';
import registerProduct from '../pages/registerProduct';
import EditProduct from '../pages/EditProduct';
import registerUser from '../pages/registerUser';

function Routes() {
    return (
        <div>
            <Switch>
                <Auth exact path="/" component={Login} />
                <Auth exact path="/registro" component={registerUser} />
                <Auth exact path="/home" component={Home} isPrivate />
                <Auth exact path="/cadastro" component={registerProduct} isPrivate />
                <Auth exact path="/editar/:id" component={EditProduct} isPrivate />
            </Switch>
        </div>
    )
}
export default Routes;