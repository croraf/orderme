import React from 'react';

import { Route } from 'react-router-dom';
import { HomeContainer } from './routes/Home/HomeContainer';



class Main extends React.Component {


    render() {

        return (
            
            <Route exact path="/" component={HomeContainer} />
        );
    }
}

export default (Main);
