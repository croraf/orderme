import React from 'react';
import config from 'Config';

import {LoggingIn} from '../LoggingIn';


const fetchJwtToken = async (googleAuthCode) => {
    console.log('fetching auth token for received google code');
    const url = config.apiHost + 'v0/auth?code=' + googleAuthCode;
    const options = {
        headers: {
            'Accept': 'application/text'
        }
    };
    const jwtToken = await ((await fetch(url, options)).text());
    window.opener.loginPopupChildWindowMessageHandler(jwtToken);
    window.close();
};

const tokenExchange = () => {

    const googleAuthCode = location.hash.split('&')[1].split('=')[1];

    fetchJwtToken(googleAuthCode);
    return <LoggingIn />;
};

export default {tokenExchange};
