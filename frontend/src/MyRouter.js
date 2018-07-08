import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import {history} from './modules/store';

import Main from './Main';

/**
 *  Adds router HOC to the application
 * @class MyRouter
 * @extends {React.Component}
 * 
 */
class MyRouter extends React.Component {
    render() {
        return (
            
            <ConnectedRouter history={history}>
                <Main />
            </ConnectedRouter>
            
        );
    }
}

export {MyRouter};
