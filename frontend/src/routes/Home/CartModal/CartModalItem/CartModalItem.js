

import React from 'react';
/* import DialogContentText from '@material-ui/core/DialogContentText'; */
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import {FoodItems} from 'Components/FoodItems/FoodItems';
class CartModalItem extends React.Component {

    render() {

        const { restaurantId, orderItemFromCartHandler, restaurantOrderData, isLastChild, loginStatus } = this.props;

        const orderButtonComponent = loginStatus ? (
            <Button onClick={() => {orderItemFromCartHandler(restaurantId);}} color="primary">
                Order
            </Button>
        ) : <div>LOG IN TO ORDER (!)</div>;

        return (
            
            <div
                style={{
                    padding: '10px 0px 0px 0px',
                    borderBottom: !isLastChild && '1px dashed black'
                }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <div style={{
                        fontWeight: 'bold'
                    }}>{restaurantId}:</div>
                </div>
                <FoodItems items={restaurantOrderData} restaurantId={restaurantId} editable={true} />

                
                <DialogActions>
                    {orderButtonComponent}
                </DialogActions>
            </div>

        );
    }
}

export { CartModalItem };