
const dal = require('../dal/orders');

const getAllOrders = async () => {
    return await dal.getAllOrders();
};

const cancelOrder = async (_id) => {
    console.log('canceling:', _id);
    return await dal.updateOrder(_id, {status: 'CANCELED'});
};

const createOrder = async (orderData) => {

    orderData['timestamp'] = new Date();
    orderData['status'] = 'AWAITING CONFIRMATION';

    console.log('ordering:', orderData);

    const _id = await dal.createOrder(orderData);

    orderTimers[_id] = setTimeout(() => {cancelOrder(_id);}, 10000);
    

    console.log('type:', typeof _id);
    return {
        _id,
        timestamp: orderData['timestamp'].valueOf(),
        status: orderData['status']
    };
};

const deleteAllOrders = async () => {
    return await dal.deleteOrder();
};


const orderTimers = {}

module.exports = {getAllOrders, createOrder, deleteAllOrders};

