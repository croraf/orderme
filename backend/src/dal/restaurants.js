const {getDatabaseConnection} = require('./db');


const getRestaurant = async (restaurantName) => {
    return await getDatabaseConnection().collection('restaurants').find({name: restaurantName}).toArray();
};

const getAllRestaurants = async () => {
    return await getDatabaseConnection().collection('restaurants').find().toArray();
};

const createRestaurant = async (restaurantObject) => {
    const n = (await getDatabaseConnection().collection('restaurants').insertOne(restaurantObject)).result.n;
    if (n === 1) {
        return;
    } else {
        throw new Error('restaurant not created');
    }
};

const deleteRestaurant = async (filter) => {
    return (await getDatabaseConnection().collection('restaurants').deleteMany(filter)).deletedCount;
};

const updateRestaurant = async () => {

};


module.exports = {getAllRestaurants, getRestaurant, createRestaurant, deleteRestaurant, updateRestaurant};

