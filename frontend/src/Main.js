import React from 'react';

import { Route, Switch } from 'react-router';
import { homeRouteRenderer } from './routes/Home/homeRouteRenderer';
import { loginRouteRenderer } from './routes/Login/loginRouteRenderer';
import { noRouteRenderer } from './routes/NoRoute/noRouteRenderer';

class Main extends React.Component {


    render() {

        return (
            <Switch>
                <Route exact path="/" component={loginRouteRenderer} />
                <Route exact path="/home" component={homeRouteRenderer} />
                <Route component={noRouteRenderer} />
            </Switch>
        );
    }
}

export default (Main);
