import React from 'react';
import config from 'Config';

import CustomSpinner from 'Components/CustomSpinner/CustomSpinner';

const fetchJwtContactParentAndClose = async (code, provider) => {
    console.log('fetching auth token for received authentication code from provider:', provider);
    const url = config.apiHost + 'v0/auth?code=' + code + '&provider=' + provider;
    const options = {
        headers: {
            'Accept': 'application/text'
        }
    };
    const jwtToken = await ((await fetch(url, options)).text());
    //window.opener.loginPopupChildWindowMessageHandler(jwtToken);
    window.opener.postMessage({source: 'login-popup', payload: jwtToken}, config.uiHost);
    window.close();
};

const facebookLoginRedirectHandler = async (location) => {
    const facebookAuthCode = new URLSearchParams(location.search).get('code');
    fetchJwtContactParentAndClose(facebookAuthCode, 'facebook');
};
/* 'http://localhost:9002/login/googleLoginRedirect#state=1234
'&id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImQxZTg2OWU3YmY0MGRkYzNkM2RlMDgwNDI1OThiYTgzNTA5NzBmMGEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNDMzMDgxNDkwNjI5LXZqMWZ0bm92dGo2cG1hY25pbGRxYTQzZmU0NG0xZDJtLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNDMzMDgxNDkwNjI5LXZqMWZ0bm92dGo2cG1hY25pbGRxYTQzZmU0NG0xZDJtLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA1ODAzMjUwMTkxNTQzNDcyMTU3IiwiZW1haWwiOiJ2cmFmYWVsaUBtc24uY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlhdCI6MTU0MjIyNTc3NCwiZXhwIjoxNTQyMjI5Mzc0LCJqdGkiOiJhMWRjNzc5MWQ1ZjYzNjhmOTM0MzdlZjRiOGFlNDE3MmQ4NTFlNmFhIn0.nNB8nrvcxE7v5TQmq-0XSdovofIWYUYLO4vniU_rYxulNVZrjaLBN7QdxAMp_r21IUTjCs3gedOGmefPQ_ZI2phNsYCcsxrahc-1q1k0MFnVKhxagPV3Q7sHcPk9u0t9sYg7Lexamp6h8BDyWh9zZBu2bNsrKgJBASayQXlK533sNq0j7rFf9nV-OQC-t47o_RHLrv8ezTg-zIKsfKylv20mku7_vfkzDX9Ix-TYY8kIBmwttcqqLvWA3Y4rxVYOgC6cwmUUUJFSMsXdl3Z4-2CUsrIFTjWhdeqK7sRDyV2buTe-HVqMblVNOVgVOmuZwL3cmyqxXBAm6WO3WJpEoA
'&authuser=0
'&session_state=3749f692df62aab81f8c7e45063be1d06e1d2fe1..5ae5
'&prompt=none */
const googleLoginRedirectHandler = async (location) => {
    const googleIdToken = location.hash.split('&')[1].split('=')[1];
    fetchJwtContactParentAndClose(googleIdToken, 'google');
};

class LoggingIn extends React.Component {

    constructor (props) {
        super(props);

        const provider = props.match.params.provider;
        switch (provider) {
            case 'facebookLoginRedirect':
                facebookLoginRedirectHandler(props.location);
                break;
            case 'githubLoginRedirect':
                
                break;
            case 'googleLoginRedirect':
                googleLoginRedirectHandler(props.location);
                break;
            default:
                break;
        }
    }

    render() {

        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: '150px'
            }}>
                <CustomSpinner color='darkblue' />
            </div>
        );
    }
}

export { LoggingIn };
