const request = require('request-promise');
const config = require('config');
const jwt = require('jsonwebtoken');

const dal = require('../dal/users');


const auth = async (provider, authCode) => {
    console.log('JWT token request received with code:', authCode);
    console.log('...for provider:', provider);

    const facebookAuthURL = 'https://graph.facebook.com/v3.1/oauth/access_token?';

    const appId = '307207183167195';
    const redirectURI = config.auth.facebookRedirectUri;
    const appSecret = 'b2c2569ad1edbd5dc9da3445f73b0d4c';

    const queryParams = `client_id=${appId}&redirect_uri=${redirectURI}&client_secret=${appSecret}&code=${authCode}`;

    const authResponse = JSON.parse(await request(facebookAuthURL + queryParams));

    console.log('auth response:', authResponse);

    const graphUserInfoURL = 'https://graph.facebook.com/me?access_token=' + authResponse.access_token;

    const userData = JSON.parse(await request(graphUserInfoURL));
    userData.role = 'customer';
    await dal.updateUser(userData.id, userData);


    const jwtToken = jwt.sign(userData, 'abcdef');
    return jwtToken;
};

module.exports = { auth};
