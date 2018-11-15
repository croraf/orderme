const request = require('request-promise');
const config = require('config');
const jwt = require('jsonwebtoken');

const dal = require('../dal/users');

const getFacebookUserData = async (authCode) => {
    const facebookAuthURL = 'https://graph.facebook.com/v3.1/oauth/access_token?';

    const appId = '307207183167195';
    const redirectURI = config.auth.facebookRedirectUri;
    const appSecret = 'b2c2569ad1edbd5dc9da3445f73b0d4c';

    const queryParams = `client_id=${appId}&redirect_uri=${redirectURI}&client_secret=${appSecret}&code=${authCode}`;

    const authResponse = JSON.parse(await request(facebookAuthURL + queryParams));

    const graphUserInfoURL = 'https://graph.facebook.com/me?access_token=' + authResponse.access_token;

    const facebookTokenData = JSON.parse(await request(graphUserInfoURL));

    const userData = {
        id: 'facebook' + facebookTokenData.id,
        name: facebookTokenData.name,
        role: 'customer'
    };
    console.log('userData:', userData);

    return userData;
};

const getGoogleUserData = async (authCode) => {
    const googleAuthURL = 'https://www.googleapis.com/oauth2/v3/tokeninfo?';

    const queryParams = `id_token=${authCode}`;

    const googleTokenData = JSON.parse(await request(googleAuthURL + queryParams));
    //console.log('googleTokenData:', googleTokenData);
    const userData = {
        id: 'google' + googleTokenData.sub,
        name: googleTokenData.email,
        role: 'customer'
    };
    console.log('userData:', userData);

    return userData;
};

const auth = async (provider, authCode) => {
    console.log('JWT token request received with code:', authCode);
    console.log('...for provider:', provider);

    let userData;

    switch (provider) {
        case 'facebook':
            userData = await getFacebookUserData(authCode);
            break;
        case 'google':
            userData = await getGoogleUserData(authCode);
            break;
        default:
            userData = await getGoogleUserData(authCode);
            break;
    }

    await dal.updateUser(userData.id, userData);

    const jwtToken = jwt.sign(userData, 'abcdef');
    return jwtToken;
};

module.exports = { auth};
