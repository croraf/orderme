

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
            case 'CANCELED':
                statusColor = 'red';
                break;
            case 'ORDER_ACCEPTED':
                statusColor = 'darkgreen';
                break;
            default:
                break;
        }

        const progressComponent = <CustomLinearProgressContainer orderId={orderData._id} orderStatus={orderData.status}/>;

        const cancelOrderButton = orderData.status === 'AWAIT_RESTAURANT_CONFIRMATION' && (
            <Button onClick={() => {cancelOrderClickHandler(orderData._id);}} color="primary">
                Cancel
            </Button>
        );

        const canceledStatusText = orderData.status === 'CANCELED' && (
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
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <div>{orderData.restaurantId}:</div>
                    <div>{new Date(orderData.timestamp).toLocaleString('de')}</div>
                </div>
                <div>{JSON.stringify(orderData.items)}</div>

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