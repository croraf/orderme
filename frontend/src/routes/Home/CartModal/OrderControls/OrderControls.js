import React from 'react';

import CustomProgress from 'Components/CustomProgress/CustomProgress';
import Button from '@material-ui/core/Button';

class OrderControls extends React.Component {
    render() {
        const {orderData} = this.props;

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
            case 'ACCEPTED':
                statusColor = '#5f5';
                break;
            case 'CONFIRMED':
                statusColor = '#060';
                break;
            default:
                break;
        }

        const cancelOrderButton = orderData.status === 'AWAITING CONFIRMATION' || orderData.status === 'ACCEPTED' ? (
            <Button onClick={this.cancelOrder} color="primary">
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

        const progressComponentAwaitingConfirmation = orderData.status === 'AWAITING CONFIRMATION' && (
            <CustomProgress
                orderStatus={orderData.status}
                initialTimestamp={orderData.timestamp}
                duration={20} 
            />
        );

        const progressComponentAccepted = orderData.status === 'ACCEPTED' && (
            <CustomProgress
                orderStatus={orderData.status}
                initialTimestamp={orderData.acceptedTimestamp}
                duration={20} 
            />
        );

        return (
            <div style={{
                padding: '0rem 1.5rem 1rem',
                margin: '0rem 1.5rem 0.5rem 1.5rem',
                borderBottom: '5px solid black'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    {cancelOrderButton}
                    {canceledStatusText}
                </div>

                {progressComponentAwaitingConfirmation}
                {progressComponentAccepted}
            </div>
        );
    }
}

export {OrderControls};
