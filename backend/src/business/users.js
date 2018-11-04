const request = require('request-promise');
const config = require('config');
const dal = require('../dal/users');

const auth = async (authCode) => {
    console.log('JWT token request received with code:', authCode);

    const facebookAuthURL = 'https://graph.facebook.com/v3.1/oauth/access_token?';

    const appId = '307207183167195';
    const redirectURI = config.auth.facebookRedirectUri;
    const appSecret = 'b2c2569ad1edbd5dc9da3445f73b0d4c';

    const queryParams = `client_id=${appId}&redirect_uri=${redirectURI}&client_secret=${appSecret}&code=${authCode}`;

    const authResponse = JSON.parse(await request(facebookAuthURL + queryParams));

    console.log('auth response:', authResponse);

    const graphUserInfoURL = 'https://graph.facebook.com/me?access_token=' + authResponse.access_token;

    const userData = JSON.parse(await request(graphUserInfoURL));
    userData.token = authResponse.access_token;
    const result = createUser(userData);

    console.log('user data:', userData);
    console.log('result:', result);
    
    return {jwt: authResponse.access_token};
};
        

const getUser = async (id) => {
    return await dal.getUser(id);
};

const getUsers = async () => {
    return await dal.getUsers();
};

const createUser = async (userObject) => {
    return await dal.createUser(userObject);
};

const deleteUser = async (_id) => {
    return await dal.deleteUser({_id});
};

const deleteUsers = async () => {
    return await dal.deleteUser();
};

const updateUser = async (name, newData) => {
    return await dal.updateUser(name, newData);
};


module.exports = { auth, getUsers, getUser, createUser, deleteUser, updateUser, deleteUsers};

