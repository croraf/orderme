import React from 'react';
import {LoginContainer} from './LoginContainer';
import {LoggingIn} from './LoggingIn';
import {store} from '../../modules/store';
import {push} from 'connected-react-router';
import config from 'Config';
var jwtDecode = require('jwt-decode');

const fetchJwtToken = async (facebookAuthCode) => {
    console.log('fetching auth token for received facebook code');
    const url = config.apiHost + 'v0/auth?code=' + facebookAuthCode;
    const options = {
        headers: {
            'Accept': 'application/text'
        }
    };
    const jwtToken = await ((await fetch(url, options)).text());
    console.log('Auth token received:', jwtToken);

    const tokenPayload = jwtDecode(jwtToken);
    console.log('tokenPayload:', tokenPayload);

    store.dispatch({type: 'login', token: jwtToken, name: tokenPayload.name});
    store.dispatch(push('/'));
};

const loginRouteRenderer = () => {

    const facebookAuthCode = new URLSearchParams(location.search).get('code');
    if (facebookAuthCode) {
        fetchJwtToken(facebookAuthCode);
        return <LoggingIn />;
    } else {
        return <LoginContainer />;
    }
};

export {loginRouteRenderer};