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

const updateUser = async (id, newData) => {
    const result = (await getDatabaseConnection().collection('users').updateOne({id}, {$set: newData}, {upsert: true})).result;

    console.log('update user result:', result);
};


module.exports = {getUsers, getUser, createUser, deleteUser, updateUser};

