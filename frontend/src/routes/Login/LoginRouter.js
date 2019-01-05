import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { LoginContainer } from './LoginContainer';
import { LoggingIn } from './LoginRedirectCommonRoute/LoggingIn';

class MainRouter extends React.Component {


    render() {

        return (
            <Switch>
                <Route exact={true} path="/login" component={LoginContainer} />
                <Route path="/login/:provider" component={LoggingIn} />
                {/* <Route component={noRouteRenderer} /> */}
            </Switch>
        );
    }
}

export default (MainRouter);
