const config = {
    apiHost: 'http://localhost:3000/',
    wsHost: 'ws://localhost:3000/',
    uiHost: 'http://localhost:9002',
    auth: {
        facebookRedirectUri: 'http://localhost:9002/login/facebookLoginRedirect',
        googleRedirectUri: 'http://localhost:9002/login/googleLoginRedirect'
    }
};

module.exports = config;