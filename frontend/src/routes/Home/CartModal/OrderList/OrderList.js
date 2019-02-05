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

            console.log(JSON.stringify(orderItem, undefined, '  '));
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
                    textAlign: 'center',
                    borderTop: '3px solid black',
                    paddingTop: '8px'
                }}>Recent orders:</div>

                <div style={{
                    minWidth: '500px',
                    borderTop: '3px solid black',
                    borderBottom: '3px solid black',
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
