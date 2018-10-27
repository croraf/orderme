

import React from 'react';
import { CartModalItemContainer } from './CartModalItem/CartModalItemContainer';
import { OrderItemContainer } from './OrderItem/OrderItemContainer';
import { Button } from '@material-ui/core';
/* import DialogContentText from '@material-ui/core/DialogContentText'; */
import config from 'Config';

class CartModalContent extends React.Component {

    render() {
        const { cartRestaurantIds, orders } = this.props;
        const numberOfCartItems = cartRestaurantIds.length;

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
            <div style={{}}>
                <div style={{
                    minWidth: '500px',
                    borderTop: '5px solid black',
                    borderBottom: '5px solid black',
                    minHeight: '50px',
                    padding: '10px 0px',
                    margin: '0px 0px 10px 0px'
                }}>
                    {cartRestaurantIds.reverse().map((restaurantId, i) =>
                        <CartModalItemContainer 
                            key={restaurantId}
                            isLastChild={i === numberOfCartItems - 1}
                            restaurantId={restaurantId}
                        />
                    )}
                </div>
                
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

                <div style={{textAlign: 'center'}}>
                    <Button color='primary'>Full orders history</Button>
                </div>
            </div>
        );
    }
}

export { CartModalContent };