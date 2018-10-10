const request = require('request-promise');
const config = require('config');

const auth = async (authCode) => {
    console.log('JWT token request received with code:', authCode);

    const facebookURL = 'https://graph.facebook.com/v3.1/oauth/access_token?';

    const appId = '307207183167195';
    const redirectURI = config.auth.facebookRedirectUri;
    const appSecret = 'b2c2569ad1edbd5dc9da3445f73b0d4c';

    const queryParams = `client_id=${appId}&redirect_uri=${redirectURI}&client_secret=${appSecret}&code=${authCode}`;

    const authResponse = JSON.parse(await request(facebookURL + queryParams));
    
    return {jwt: authResponse.access_token};
};
        

/* const getUser = async (userName) => {
    return await dal.getUser(userName);
};

const getAllUsers = async () => {
    return await dal.getAllUsers();
};

const createUser = async (userObject) => {
    return await dal.createUser(userObject);
};

const deleteUser = async (name) => {
    return await dal.deleteUser({name: name});
};

const deleteAllUsers = async () => {
    return await dal.deleteUser();
};

const updateUser = async (name, newData) => {
    return await dal.updateUser(name, newData);
}; */


module.exports = { auth /* getAllUsers, getUser, createUser, deleteUser, updateUser, deleteAllUsers */};

