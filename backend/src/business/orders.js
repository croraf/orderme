
const dal = require('../dal/orders');

const getOrder = async (_id) => {
    return await dal.getOrder(_id);
};

const getAllOrders = async () => {
    return await dal.getAllOrders();
};

const cancelOrder = async (_id) => {
    console.log('canceling:', _id);
    return await dal.updateOrder(_id, {status: 'CANCELED'});
};

const acceptOrder = async (_id) => {
    console.log('accepting:', _id);
    return await dal.updateOrder(_id, {status: 'ACCEPTED'});
};

const createOrder = async (orderData) => {
    orderData['timestamp'] = new Date();
    orderData['status'] = 'AWAITING CONFIRMATION';

    console.log('ordering:', orderData);

    const _id = await dal.createOrder(orderData);

    orderTimers[_id] = setTimeout(
        () => {
            Math.random() > 0.5 ? cancelOrder(_id) : acceptOrder(_id);
        },
        3000 + Math.random() * 6000
    );
    

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


const orderTimers = {};

module.exports = {getOrder, getAllOrders, createOrder, deleteAllOrders};

