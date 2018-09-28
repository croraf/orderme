import React from 'react';
import {LoginContainer} from './LoginContainer';
import {LoggingIn} from './LoggingIn';
import {store} from '../../modules/store';
import {push} from 'connected-react-router';

const fetchJwtToken = async (facebookAuthCode) => {
    console.log('fetching auth token for received facebook code');
    const url = 'http://localhost:3000/v0/auth?code=' + facebookAuthCode;
    const options = {
        headers: {
            'Accept': 'application/json'
        }
    };
    const responseJson = await ((await fetch(url, options)).json());
    console.log('Auth token received:', responseJson.jwt);
    localStorage.setItem('auth_token', responseJson.jwt);
    store.dispatch(push('/home'));
};

const loginRouteRenderer = () => {

    const auth_token = localStorage.getItem('auth_token');
    console.log('token in local storage:', auth_token);
    if (auth_token) {
        store.dispatch(push('/home'));
    }

    const facebookAuthCode = new URLSearchParams(location.search).get('code');
    if (facebookAuthCode) {
        fetchJwtToken(facebookAuthCode);
        return <LoggingIn />;
    } else {
        return <LoginContainer />;
    }
};

export {loginRouteRenderer};