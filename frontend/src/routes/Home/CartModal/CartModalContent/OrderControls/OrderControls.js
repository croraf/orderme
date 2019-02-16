import React from 'react';

import CustomProgress from 'Components/CustomProgress/CustomProgress';
import Button from '@material-ui/core/Button';

class OrderControls extends React.Component {


    cancelOrder = () => {
        this.props.cancelOrderClickHandler(this.props.orderId);
    } 

    render() {
        const {orderingStatus, orderedTimestamp, acceptedTimestamp} = this.props;


        if (!['AWAITING CONFIRMATION', 'ACCEPTED', 'CANCELED', 'CONFIRMED'].includes(orderingStatus)) {
            return null;
        }

        let statusColor = 'black';
        switch (orderingStatus) {
            case 'NOT PLACED':
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

        const cancelOrderButton = orderingStatus === 'AWAITING CONFIRMATION' || orderingStatus === 'ACCEPTED' ? (
            <Button onClick={this.cancelOrder} color="primary">
                Cancel
            </Button>
        ) : <div />;

        const progressComponentAwaitingConfirmation = orderingStatus === 'AWAITING CONFIRMATION' && (
            <CustomProgress
                orderStatus={orderingStatus}
                initialTimestamp={orderedTimestamp}
                duration={20} 
            />
        );

        const progressComponentAccepted = orderingStatus === 'ACCEPTED' && (
            <CustomProgress
                orderStatus={orderingStatus}
                initialTimestamp={acceptedTimestamp}
                duration={20} 
            />
        );

        return (
            <div style={{
                padding: '0rem 0rem',
                margin: '0rem 0rem 0rem 0rem',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    {cancelOrderButton}
                </div>

                {progressComponentAwaitingConfirmation}
                {progressComponentAccepted}
            </div>
        );
    }
}

export {OrderControls};
