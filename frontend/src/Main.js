import React from 'react';

import { Route, Switch } from 'react-router';
import { HomeContainer } from './routes/Home/HomeContainer';
import { LoginContainer } from './routes/Login/LoginContainer';


class Main extends React.Component {


    render() {

        return (
            <Switch>
                <Route exact path="/" component={LoginContainer} />
                <Route exact path="/home" component={HomeContainer} />
            </Switch>
        );
    }
}

export default (Main);
