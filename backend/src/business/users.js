
const dal = require('../dal/users');
        

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


module.exports = { getUsers, getUser, createUser, deleteUser, updateUser, deleteUsers};

