import React from 'react';
import { Switch } from 'react-router-dom';
import Auth from './Auth';

import Home from '../pages/home';
import Login from '../pages/login';
import RegisterProduct from '../pages/registerProduct';
import RegisterUser from '../pages/registerUser';
import EditProduct from '../pages/editProduct';
import RegisterCategory from '../pages/registerCategory';
import List from '../pages/list';

function Routes() {
    return (
        <div>
            <Switch>
                <Auth exact path="/" component={Login} />
                <Auth exact path="/registro" component={RegisterUser} />
                <Auth exact path="/home" component={Home} isPrivate />
                <Auth exact path="/cadastro" component={RegisterProduct} isPrivate />
                <Auth exact path="/editar/:id" component={EditProduct} isPrivate />
                <Auth exact path="/registrarcategoria" component={RegisterCategory} isPrivate />
                <Auth exact path="/lista" component={List} isPrivate />
            </Switch>
        </div>
    )
}
export default Routes;

//<Auth exact path="/editar/:id" component={editProduct} isPrivate /> 
//<Auth exact path="/registrarcategoria" component={registerCategory} isPrivate />