const {getDatabaseConnection} = require('./db');

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


module.exports = {getAllOrders, createOrder, deleteOrder};

