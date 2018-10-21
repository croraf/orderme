

import React from 'react';
/* import DialogContentText from '@material-ui/core/DialogContentText'; */
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';

class CartModalItem extends React.Component {

    render() {

        const { restaurantId, orderItemFromCartHandler, restaurantOrderData, isLastChild } = this.props;

        return (
            
            <div
                style={{
                    padding: '10px 0px 0px 0px',
                    borderBottom: !isLastChild && '1px dashed black'
                }}
            >
                <div>{restaurantId}:</div>
                <div>{JSON.stringify(restaurantOrderData)}</div>

                <DialogActions>
                    <Button onClick={() => {orderItemFromCartHandler(restaurantId);}} color="primary">
                        Order
                    </Button>
                </DialogActions>
            </div>

        );
    }
}

export { CartModalItem };