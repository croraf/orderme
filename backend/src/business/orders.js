
const dal = require('../dal/orders');
const {sendMessage} = require('../ws'); 

const getOrder = async (_id) => {
    return await dal.getOrder(_id);
};

const getAllOrders = async () => {
    return await dal.getAllOrders();
};

const cancelOrder = async (_id) => {
    console.log('canceling:', _id, typeof _id);
    
    orderAcceptTimers[_id] && clearTimeout(orderAcceptTimers[_id]);
    orderConfirmationTimers[_id] && clearTimeout(orderConfirmationTimers[_id]);

    const cancelingResult = await dal.updateOrder(
        {$and: [{_id}, {status: {$ne: 'CONFIRMED'}}]},
        {status: 'CANCELED'}
    );
    
    sendMessage(
        'facebook2103849006536449', 
        {
            type: 'orderStatusChange', 
            message: {
                _id, 
                status: 'CANCELED'
            }
        }
    );
    return cancelingResult;
};

const acceptOrder = async (_id) => {
    console.log('accepting:', _id, typeof _id);
    const acceptedTimestamp = Date.now();
    const updatingResult = await dal.updateOrder(
        {$and: [{_id}, {status: 'AWAITING CONFIRMATION'}]}, 
        {status: 'ACCEPTED', acceptedTimestamp}
    );

    if (updatingResult === 1) {
        // order has been set to accepted from awaiting confirmation
        // start confirmation timer

        sendMessage(
            'facebook2103849006536449', 
            {
                type: 'orderStatusChange', 
                message: {
                    _id, 
                    status: 'ACCEPTED',
                    acceptedTimestamp
                }
            }
        );
        orderConfirmationTimers[_id] = setTimeout(() => {confirmOrder(_id);}, acceptedTimestamp + 10000 - Date.now());
    } else {
        sendMessage(
            'facebook2103849006536449', 
            {
                type: 'orderStatusChange', 
                message: {
                    _id, 
                    status: 'CANCELED'
                }
            }
        );
    }
    console.log('accepting result:', updatingResult);

    
};

const confirmOrder = async (_id) => {
    console.log('confirming:', _id, typeof _id);
    
    const confirmingResult = await dal.updateOrder(
        {$and: [{_id}, {status: {$ne: 'CANCELED'}}]},
        {status: 'CONFIRMED'}
    );
    console.log('confirming result:', confirmingResult);
    sendMessage(
        'facebook2103849006536449', 
        {
            type: 'orderStatusChange', 
            message: {
                _id, 
                status: 'CONFIRMED'
            }
        }
    );
};


const createOrder = async (orderData) => {
    orderData['timestamp'] = Date.now();
    orderData['status'] = 'AWAITING CONFIRMATION';

    console.log('ordering:', orderData);
    const _id = await dal.createOrder(orderData);
    console.log('order created:', _id, typeof _id);

    orderAcceptTimers[_id] = setTimeout(
        () => {
            Math.random() > 0.5 ? cancelOrder(_id) : acceptOrder(_id);
        },
        3000 + Math.random() * 6000
    );
    
    return {
        _id,
        timestamp: orderData['timestamp'].valueOf(),
        status: orderData['status']
    };
};

const deleteAllOrders = async () => {
    return await dal.deleteOrder();
};


const orderAcceptTimers = {};
const orderConfirmationTimers = {};

module.exports = {getOrder, getAllOrders, createOrder, deleteAllOrders, cancelOrder};

