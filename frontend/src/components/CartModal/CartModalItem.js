

import React from 'react';
/* import DialogContentText from '@material-ui/core/DialogContentText'; */
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';

class CartModalItem extends React.Component {

    render() {

        const { restaurantId, restaurantData, isLastChild, removeItemFromCartHandler, orderItemFromCartHandler } = this.props;

        let statusColor = 'black';
        switch (restaurantData.orderStatus) {
            case 'NOT_PLACED':
                statusColor = 'black';
                break;
            case 'ORDER_PLACE_SUCCESS':
                statusColor = 'gold';
                break;
            case 'ORDER_PLACE_FAIL':
                statusColor = 'dark red';
                break;
            default:
                break;
        }

        return (
            
            <div
                style={{
                    padding: '10px 0px',
                    color: statusColor,
                    borderBottom: !isLastChild && '1px dashed black'
                }}
            >
                <div>{restaurantId}:</div>
                <div>{JSON.stringify(restaurantData.order)}</div>


                <DialogActions>
                    <Button onClick={() => {removeItemFromCartHandler(restaurantId);}} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => {orderItemFromCartHandler(restaurantId);}} color="primary">
                        Order
                    </Button>
                </DialogActions>
            </div>

        );
    }
}

export { CartModalItem };