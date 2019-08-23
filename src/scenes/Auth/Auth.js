import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import T from 'prop-types';
import s from './Auth.module.scss';
import { Header } from '../../components';
import { routes } from '../router';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Api from '../../api';


function Auth() {
    console.log(Api.Auth.isLoggedIn);
    return (
        <div className={s.container}>
        <Header />
        <Switch>
            {Api.Auth.isLoggedIn && <Redirect to={routes.home} />}
            <Route path={routes.login} component={Login} exact />
            <Route path={routes.register} component={Register} exact />
            <Redirect from={routes.auth} to={routes.login} />
        </Switch>
        </div>
    );
}

export default Auth;