
const dal = require('../dal/orders');
const {ObjectId} = require('mongodb');

const getOrder = async (_id) => {
    return await dal.getOrder(_id);
};

const getAllOrders = async () => {
    return await dal.getAllOrders();
};

const cancelOrder = async (_id) => {
    console.log('canceling:', _id);
    clearTimeout(orderTimers[ObjectId(_id)]);
    const cancelingResult = await dal.updateOrder(
        {$and: [{_id: ObjectId(_id)}, {status: {$ne: 'CONFIRMED'}}]},
        {status: 'CANCELED'});
    return cancelingResult;
};

const acceptOrder = async (_id) => {
    console.log('accepting:', _id);
    return await dal.updateOrder({$and: [{_id}, {status: 'AWAITING CONFIRMATION'}]}, {status: 'ACCEPTED'});
};

const createOrder = async (orderData) => {
    orderData['timestamp'] = Date.now();
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

module.exports = {getOrder, getAllOrders, createOrder, deleteAllOrders, cancelOrder};

