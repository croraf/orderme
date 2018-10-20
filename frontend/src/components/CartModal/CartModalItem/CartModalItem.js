

import React from 'react';
/* import DialogContentText from '@material-ui/core/DialogContentText'; */
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import {CustomLinearProgressContainer} from 'Components/CustomLinearProgress/CustomLinearProgressContainer';

class CartModalItem extends React.Component {

    render() {

        const { restaurantId, restaurantOrderData, isLastChild, removeItemFromCartHandler, orderItemFromCartHandler, cancelOrderClickHandler } = this.props;

        let statusColor = 'black';
        switch (restaurantOrderData.orderStatus) {
            case 'NOT_PLACED':
                statusColor = 'black';
                break;
            case 'AWAIT_RESTAURANT_CONFIRMATION':
                statusColor = '#3f51b5';
                break;
            case 'ORDER_PLACE_FAIL':
                statusColor = 'red';
                break;
            case 'ORDER_ACCEPTED':
                statusColor= 'darkgreen';
                break;
            default:
                break;
        }

        const progressComponent = 
            restaurantOrderData.orderStatus !== 'NOT_PLACED' && <CustomLinearProgressContainer restaurantId={restaurantId} />;

        const orderButton = restaurantOrderData.orderStatus === 'NOT_PLACED' && (
            <Button onClick={() => {orderItemFromCartHandler(restaurantId);}} color="primary">
                Order
            </Button>
        );

        const cancelOrderButton = restaurantOrderData.orderStatus === 'AWAIT_RESTAURANT_CONFIRMATION' && (
            <Button onClick={() => {cancelOrderClickHandler(restaurantId);}} color="primary">
                Cancel
            </Button>
        );

        const canceledStatusText = restaurantOrderData.orderStatus === 'ORDER_PLACE_FAIL' && (
            <div style={{color: 'red'}}>
                ORDER NOT SUCCESSFUL
            </div>
        );

        return (
            
            <div
                style={{
                    padding: '10px 0px',
                    color: statusColor,
                    borderBottom: !isLastChild && '1px dashed black'
                }}
            >
                <div>{restaurantId}:</div>
                <div>{JSON.stringify(restaurantOrderData.order)}</div>

                <DialogActions>
                    {cancelOrderButton}

                    {orderButton}

                    {canceledStatusText}
                </DialogActions>

                {progressComponent}
            </div>

        );
    }
}

export { CartModalItem };