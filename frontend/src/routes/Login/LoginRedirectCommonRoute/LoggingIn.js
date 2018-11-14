import React from 'react';
import config from 'Config';

const fetchJWT = async (code, provider) => {
    console.log('fetching auth token for received authentication code from provider:', provider);
    const url = config.apiHost + 'v0/auth?code=' + code + '&provider=' + provider;
    const options = {
        headers: {
            'Accept': 'application/text'
        }
    };
    const jwtToken = await ((await fetch(url, options)).text());
    window.opener.loginPopupChildWindowMessageHandler(jwtToken);
    window.close();
};

const facebookLoginRedirectHandler = async (location) => {
    const facebookAuthCode = new URLSearchParams(location.search).get('code');
    fetchJWT(facebookAuthCode, 'facebook');
};

const googleLoginRedirectHandler = async (location) => {
    const googleAuthCode = location.hash.split('&')[1].split('=')[1];
    fetchJWT(googleAuthCode, 'google');
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
                marginTop: '200px'
            }}>
                <div 
                    style={{
                        color: 'white',
                        fontSize: '30px'
                    }}
                >
                    ... logging in ...
                </div>
            </div>
        );
    }
}

export { LoggingIn };
