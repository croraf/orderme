const {getDatabaseConnection} = require('./db');


const getUser = async (UserName) => {
    return await getDatabaseConnection().collection('users').findOne({name: UserName});
};

const getUsers = async () => {
    return await getDatabaseConnection().collection('users').find().toArray();
};

const createUser = async (userObject) => {
    const result = (await getDatabaseConnection().collection('users').insertOne(userObject)).result;
    if (result.n === 1) {
        return result.n;
    } else {
        throw new Error('User not created:', result);
    }
};

const deleteUser = async (filter) => {
    return (await getDatabaseConnection().collection('users').deleteMany(filter)).deletedCount;
};

const updateUser = async (name, newData) => {
    const n = (await getDatabaseConnection().collection('users').updateMany({name: name}, {$set: newData})).result.n;
    if (n === 1) {
        return;
    } else {
        throw new Error('User not updated');
    }
};


module.exports = {getUsers, getUser, createUser, deleteUser, updateUser};

