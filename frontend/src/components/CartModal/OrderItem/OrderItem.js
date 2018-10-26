

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
            case 'AWAITING CONFIRMATION':
                statusColor = 'gold';
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

        const progressComponent = orderData.status === 'AWAITING CONFIRMATION' && (
            <CustomLinearProgressContainer orderId={orderData._id} orderStatus={orderData.status}/>
        );

        const cancelOrderButton = orderData.status === 'AWAITING CONFIRMATION' ? (
            <Button onClick={() => {cancelOrderClickHandler(orderData._id);}} color="primary">
                Cancel
            </Button>
        ) : <div />;

        const canceledStatusText = (
            <div style={{
                color: statusColor,
                padding: '8px 0px'
            }}>
                {orderData.status}
            </div>
        );

        return (
            
            <div
                style={{
                    padding: '10px 0px 0px 0px',
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

                {/* <DialogActions>
                </DialogActions> */}

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    {cancelOrderButton}
                    {canceledStatusText}
                </div>
                

                {progressComponent}
            </div>

        );
    }
}

export { OrderItem };