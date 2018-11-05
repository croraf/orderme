import React from 'react';
import {store} from '../../modules/store';
import {push} from 'connected-react-router';

const noRouteRenderer = () => {

    const authToken = localStorage.getItem('token');
    if (!authToken) {
        store.dispatch(push('/'));
    } else {
        store.dispatch(push('/home'));
    }

    return null;
};

export {noRouteRenderer};