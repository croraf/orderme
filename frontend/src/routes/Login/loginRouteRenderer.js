import React from 'react';
import config from 'Config';

import {LoginContainer} from './LoginContainer';
import {LoggingIn} from './LoggingIn';


const fetchJwtToken = async (facebookAuthCode) => {
    console.log('fetching auth token for received facebook code');
    const url = config.apiHost + 'v0/auth?code=' + facebookAuthCode;
    const options = {
        headers: {
            'Accept': 'application/text'
        }
    };
    const jwtToken = await ((await fetch(url, options)).text());
    window.opener.loginPopupChildWindowMessageHandler(jwtToken);
    window.close();
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