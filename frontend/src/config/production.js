const config = {
    apiHost: 'https://order1.herokuapp.com/',
    wsHost: 'wss://order1.herokuapp.com/',
    uiHost: 'https://order1.herokuapp.com',
    auth: {
        facebookRedirectUri: 'https://order1.herokuapp.com/login/facebookLoginRedirect',
        googleRedirectUri: 'https://order1.herokuapp.com/login/googleLoginRedirect'
    }
};

module.exports = config;