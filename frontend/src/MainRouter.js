import React from 'react';

import { Route, Switch } from 'react-router-dom';
import LoginRouter from './routes/Login/LoginRouter';
import { HomeContainer } from './routes/Home/HomeContainer';
/* import { noRouteRenderer } from './routes/NoRoute/noRouteRenderer'; */

class MainRouter extends React.Component {


    render() {

        return (
            <Switch>
                <Route path="/login" component={LoginRouter} />
                <Route path="/" component={HomeContainer} />
                {/* <Route component={noRouteRenderer} /> */}
            </Switch>
        );
    }
}

export default (MainRouter);
