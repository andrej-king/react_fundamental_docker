import React, {useContext} from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {publicRoutes, privateRoutes} from '../router/routes'
import {AuthContext} from '../context'
import Loader from './UI/loader/Loader'

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    // Отображение loader пока идут проверки авторизации (чтоб небыло лишних редиректов)
    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to='/posts'/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to='/login'/>
            </Switch>

    );
};

export default AppRouter;
