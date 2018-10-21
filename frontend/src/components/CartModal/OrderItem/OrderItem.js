

import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import {CustomLinearProgressContainer} from 'Components/CustomLinearProgress/CustomLinearProgressContainer';

class OrderItem extends React.Component {

    render() {

        const { isLastChild, orderData, cancelOrderClickHandler} = this.props;

        let statusColor = 'black';
        switch (orderData.status) {
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
                statusColor = 'darkgreen';
                break;
            default:
                break;
        }

        console.log(orderData);

        const progressComponent = 
            orderData.status !== 'NOT_PLACED' && <CustomLinearProgressContainer orderId={orderData.orderId} orderStatus={orderData.status}/>;

        const cancelOrderButton = orderData.status === 'AWAIT_RESTAURANT_CONFIRMATION' && (
            <Button onClick={() => {cancelOrderClickHandler(orderData.orderId);}} color="primary">
                Cancel
            </Button>
        );

        const canceledStatusText = orderData.status === 'ORDER_PLACE_FAIL' && (
            <div style={{color: 'red'}}>
                ORDER NOT SUCCESSFUL
            </div>
        );

        return (
            
            <div
                style={{
                    padding: '10px 0px 10px 0px',
                    color: 'black',
                    borderBottom: !isLastChild && '1px dashed black'
                }}
            >
                <div>{orderData.restaurantId}:</div>
                <div>{JSON.stringify(orderData.orderItems)}</div>

                <DialogActions>
                    {cancelOrderButton}

                    {canceledStatusText}
                </DialogActions>

                {progressComponent}
            </div>

        );
    }
}

export { OrderItem };