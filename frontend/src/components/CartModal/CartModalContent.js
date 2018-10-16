

import React from 'react';
import { CartModalItem } from './CartModalItem';
/* import DialogContentText from '@material-ui/core/DialogContentText'; */

class CartModalContent extends React.Component {

    render() {

        const { cartData, removeItemFromCartHandler, orderItemFromCartHandler, cancelOrderClickHandler } = this.props;
        const numberOfItems = Object.keys(cartData).length;

        return (
            <div style={{
                minWidth: '500px',
                borderTop: '1px solid black',
                borderBottom: '1px solid black',
                minHeight: '100px'
            }}>
                {Object.keys(cartData).map((restaurantId, i) => (
                    <CartModalItem 
                        key={restaurantId}
                        isLastChild={i === numberOfItems - 1}
                        restaurantId={restaurantId}
                        restaurantData={cartData[restaurantId]} 
                        removeItemFromCartHandler={removeItemFromCartHandler}
                        orderItemFromCartHandler={orderItemFromCartHandler}
                        cancelOrderClickHandler={cancelOrderClickHandler}
                    />
                ))}
            </div>

        );
    }
}

export { CartModalContent };