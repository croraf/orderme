import React from 'react';
import {HomeContainer} from './HomeContainer';
import {store} from '../../modules/store';
import {push} from 'connected-react-router';

const homeRouteRenderer = () => {

    const auth_token = localStorage.getItem('auth_token');
    console.log('token in local storage:', auth_token);
    if (!auth_token) {
        store.dispatch(push('/'));
    }
    
    return <HomeContainer />;
};

export {homeRouteRenderer};