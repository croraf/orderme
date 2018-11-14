import React from 'react';

import { Route, Switch } from 'react-router';
import { LoginContainer } from './LoginContainer';
import facebookLoginRedirect from './FacebookLoginRedirect';
import googleLoginRedirect from './GoogleLoginRedirect';

class MainRouter extends React.Component {


    render() {

        return (
            <Switch>
                <Route exact={true} path="/login" component={LoginContainer} />
                <Route path="/login/facebookLoginRedirect" component={facebookLoginRedirect.tokenExchange} />
                <Route path="/login/googleLoginRedirect" component={googleLoginRedirect.tokenExchange} />
                {/* <Route component={noRouteRenderer} /> */}
            </Switch>
        );
    }
}

export default (MainRouter);
