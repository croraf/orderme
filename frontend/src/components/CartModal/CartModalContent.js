

import React from 'react';
import { CartModalItemContainer } from './CartModalItem/CartModalItemContainer';
import { OrderItemContainer } from './OrderItem/OrderItemContainer';
import { Button } from '@material-ui/core';
/* import DialogContentText from '@material-ui/core/DialogContentText'; */

class CartModalContent extends React.Component {

    render() {
        const { cartRestaurantIds, orders } = this.props;
        const numberOfCartItems = cartRestaurantIds.length;
        const numberOfOrderItems = Object.keys(orders).length;

        

        return (
            <div style={{}}>
                <div style={{
                    minWidth: '500px',
                    borderTop: '5px solid black',
                    borderBottom: '5px solid black',
                    minHeight: '50px',
                    paddingTop: '10px',
                    margin: '0px 0px 10px 0px'
                }}>
                    {cartRestaurantIds.map((restaurantId, i) =>
                        <CartModalItemContainer 
                            key={restaurantId}
                            isLastChild={i === 0}
                            restaurantId={restaurantId}
                        />
                    ).reverse()}
                </div>
                
                <div style={{
                    textAlign: 'center',
                    borderTop: '3px solid black',
                    paddingTop: '8px'
                }}>Placed orders:</div>

                <div style={{
                    minWidth: '500px',
                    borderTop: '3px solid black',
                    borderBottom: '3px solid black',
                    minHeight: '50px',
                    paddingTop: '10px',
                    margin: '10px 0px 10px 0px'
                }}>
                    
                    {Object.keys(orders).map((orderId, i) => 
                        <OrderItemContainer
                            key={orderId}
                            isLastChild={i === 0}
                            orderData={orders[orderId]} />
                    ).reverse()}
                </div>

                <div style={{textAlign: 'center'}}>
                    <Button color='primary'>Full orders history</Button>
                </div>
            </div>
        );
    }
}

export { CartModalContent };