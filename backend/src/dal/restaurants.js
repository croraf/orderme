const {getDatabaseConnection} = require('./db');


const getRestaurant = async (restaurantName) => {
    return await getDatabaseConnection().collection('restaurants').findOne({name: restaurantName});
};

const getAllRestaurants = async () => {
    return await getDatabaseConnection().collection('restaurants').find().toArray();
};

const createRestaurant = async (restaurantObject) => {
    const result = (await getDatabaseConnection().collection('restaurants').insertOne(restaurantObject)).result;
    if (result.n === 1) {
        return result.n;
    } else {
        throw new Error('Restaurant not created:', result);
    }
};

const deleteRestaurant = async (filter) => {
    return (await getDatabaseConnection().collection('restaurants').deleteMany(filter)).deletedCount;
};

const updateRestaurant = async (name, newData) => {
    const n = (await getDatabaseConnection().collection('restaurants').updateMany({name: name}, {$set: newData})).result.n;
    if (n === 1) {
        return;
    } else {
        throw new Error('Restaurant not updated');
    }
};


module.exports = {getAllRestaurants, getRestaurant, createRestaurant, deleteRestaurant, updateRestaurant};

