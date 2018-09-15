const dal = require('../dal/restaurants');

const getRestaurant = async (restaurantName) => {
    return await dal.getRestaurant(restaurantName);
};

const getAllRestaurants = async () => {
    return await dal.getAllRestaurants();
};

const createRestaurant = async (restaurantObject) => {
    return await dal.createRestaurant(restaurantObject);
};

const deleteRestaurant = async (name) => {
    return await dal.deleteRestaurant({name: name});
};

const deleteAllRestaurants = async () => {
    return await dal.deleteRestaurant();
};

const updateRestaurant = async () => {

};


module.exports = {getAllRestaurants, getRestaurant, createRestaurant, deleteRestaurant, updateRestaurant, deleteAllRestaurants};

