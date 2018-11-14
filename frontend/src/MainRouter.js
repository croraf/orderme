import React from 'react';

import { Route, Switch } from 'react-router';
import { homeRouteRenderer } from './routes/Home/homeRouteRenderer';
import LoginRouter from './routes/Login/LoginRouter';
/* import { noRouteRenderer } from './routes/NoRoute/noRouteRenderer'; */

class MainRouter extends React.Component {


    render() {

        return (
            <Switch>
                <Route path="/login" component={LoginRouter} />
                <Route path="/" component={homeRouteRenderer} />
                {/* <Route component={noRouteRenderer} /> */}
            </Switch>
        );
    }
}

export default (MainRouter);
