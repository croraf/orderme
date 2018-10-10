
const makeOrder = async (orders) => {

    const response = {};

    Object.keys(orders).forEach(restaurantId => {
        response[restaurantId] = true;
    });
    
    return await response;
};

module.exports = {makeOrder};