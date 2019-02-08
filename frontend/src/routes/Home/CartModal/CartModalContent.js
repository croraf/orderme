

import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import {FoodItems} from 'Components/FoodItems/FoodItems';
import Button from '@material-ui/core/Button';

class CartModalContent extends React.Component {

    render() {
        const { cart, loginStatus, orderItemFromCartHandler } = this.props;

        if (cart.restaurantId === undefined) {
            return null;
        }

        const orderButtonComponent = loginStatus ? (
            <Button onClick={() => {orderItemFromCartHandler(cart.restaurantId);}} color="primary">
                Order
            </Button>
        ) : <div>LOG IN TO ORDER (!)</div>;

        return (
            <div
                style={{
                    padding: '10px 0px 0px 0px'
                }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <div style={{
                        fontWeight: 'bold'
                    }}>{cart.restaurantId}:</div>
                </div>

                {cart.foodItems &&
                    <FoodItems items={cart.foodItems} restaurantId={cart.restaurantId} editable={true} />
                }
                
                <DialogActions>
                    {orderButtonComponent}
                </DialogActions>
            </div>
        );
    }
}

export { CartModalContent };