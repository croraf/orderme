import React from 'react';
import {store} from '../../modules/store';
import {push} from 'connected-react-router';

const noRouteRenderer = () => {

    const auth_token = localStorage.getItem('auth_token');
    if (!auth_token) {
        store.dispatch(push('/'));
    } else {
        store.dispatch(push('/home'));
    }

    return null;
};

export {noRouteRenderer};