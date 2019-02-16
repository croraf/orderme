import React from 'react';

import { OrderItemContainer } from '../OrderItem/OrderItemContainer';
import config from 'Config';


class OrderList extends React.Component {
    render() {
        const { orders } = this.props;

        const orderItemsArray = Object.values(orders);
        const ordersElements = [];
        for (let i = 0; i < config.numberOfOrderItemsInCartView && i < orderItemsArray.length; i++) {
            const orderItem = orderItemsArray[orderItemsArray.length - 1 - i];
            ordersElements.push(
                <OrderItemContainer
                    key={orderItem._id}
                    isLastChild={i === config.numberOfOrderItemsInCartView - 1}
                    orderData={orderItem} />
            );
        }

        return (
            <React.Fragment>
                <div style={{
                    minWidth: '600px',
                    textAlign: 'center',
                    borderTop: '5px solid black',
                    paddingTop: '8px'
                }}>Recent orders:</div>

                <div style={{
                    minWidth: '600px',
                    borderTop: '5px solid black',
                    borderBottom: '5px solid black',
                    minHeight: '50px',
                    padding: '10px 0px',
                    margin: '10px 0px 10px 0px'
                }}>
                    {ordersElements}
                </div>
            </React.Fragment>
        );
    }
}

export {OrderList};
