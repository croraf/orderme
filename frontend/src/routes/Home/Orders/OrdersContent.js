import React from 'react';
import {OrderItemContainer} from './OrderItem/OrderItemContainer';

class OrdersContent extends React.Component {

    render() {
        const {orders} = this.props;

        const orderItemsArray = Object.values(orders);
        const ordersElements = [];
        for (let i = 0; i < orderItemsArray.length; i++) {
            const orderItem = orderItemsArray[orderItemsArray.length - 1 - i];
            ordersElements.push(
                <OrderItemContainer
                    key={orderItem._id}
                    isLastChild={i ===  orderItemsArray.length - 1}
                    orderData={orderItem} />
            );
        }

        return (
            <div style={{
                borderTop: '2px solid black',
                borderBottom: '2px solid black',
                paddingLeft: '2px',
                paddingRight: '2px',
                marginBottom: '2rem',
            }}>
                {ordersElements}
            </div>
        );
    }
}

export {OrdersContent};
