
const dal = require('../dal/orders');

const getAllOrders = async () => {
    return await dal.getAllOrders();
};

const createOrder = async (orderData) => {

    console.log('ordering for ', orderData.restaurantId, ': ', orderData.items);
    
    return await dal.createOrder(orderData);
};

const deleteAllOrders = async () => {
    return await dal.deleteOrder();
};

module.exports = {getAllOrders, createOrder, deleteAllOrders};

