import React from 'react';

import { Route, Switch } from 'react-router';
import { HomeContainer } from './routes/Home/HomeContainer';
import { LoginContainer } from './routes/Login/LoginContainer';
import AuthCallback from './routes/AuthCallback/AuthCallback';


class Main extends React.Component {


    render() {

        return (
            <Switch>
                <Route exact path="/" component={LoginContainer} />
                <Route exact path="/home" component={HomeContainer} />
                <Route exact path="/authcallback" component={AuthCallback} />
                
            </Switch>
        );
    }
}

export default (Main);
