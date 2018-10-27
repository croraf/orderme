const {getDatabaseConnection} = require('./db');
const {ObjectId} = require('mongodb');

const getOrder = async (_id) => {
    console.log('getting order with _id:', _id);
    return await getDatabaseConnection().collection('orders').findOne({_id: ObjectId(_id)});
};

const getAllOrders = async () => {
    return await getDatabaseConnection().collection('orders').find().toArray();
};

const createOrder = async (orderObject) => {
    try {
        const result = (await getDatabaseConnection().collection('orders').insertOne(orderObject));
        return result.insertedId;
    } catch (err) {
        throw new Error('Order not created:', err);
    }
};

const deleteOrder = async (filter) => {
    return (await getDatabaseConnection().collection('orders').deleteMany(filter)).deletedCount;
};

const updateOrder = async (_id, newData) => {
    const n = (await getDatabaseConnection().collection('orders').updateOne({_id: _id}, {$set: newData})).modifiedCount;
    console.log('updateOrder modified count:', n);
    if (n === 1) {
        return;
    } else {
        throw new Error('Order not updated');
    }
};

module.exports = {getOrder, getAllOrders, createOrder, deleteOrder, updateOrder};

