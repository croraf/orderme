const {getDatabaseConnection} = require('./db');
const {ObjectID} = require('mongodb');

const getOrder = async (_id) => {
    // console.log('getting order with _id:', _id);
    return await getDatabaseConnection().collection('orders').findOne(ObjectID(_id));
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

const updateOrder = async (filter, newData) => {
    /* console.log('updatingOrder with filter:', filter);
    console.log('and newData:', newData); */
    const result = (await getDatabaseConnection().collection('orders').updateOne(filter, {$set: newData}));
    console.log('updateOrder matchedCount:', result.matchedCount);
    console.log('updateOrder modifiedCount:', result.modifiedCount);
    return result.matchedCount;
};

module.exports = {getOrder, getAllOrders, createOrder, deleteOrder, updateOrder};

