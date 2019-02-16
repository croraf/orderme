

import React from 'react';
import Button from '@material-ui/core/Button';
/* import DialogActions from '@material-ui/core/DialogActions'; */
import {FoodItems} from 'Components/FoodItems/FoodItems';
import CustomProgress from 'Components/CustomProgress/CustomProgress';
import { RestaurantName } from '../../CartModal/CartModalContent/RestaurantName';

class OrderItem extends React.Component {

    cancelOrder = () => {
        this.props.cancelOrderClickHandler(this.props.orderData._id);
    } 

    render() {

        const { isLastChild, orderData} = this.props;

        let statusColor = 'black';
        switch (orderData.status) {
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

        const cancelOrderButton = orderData.status === 'AWAITING CONFIRMATION' || orderData.status === 'ACCEPTED' ? (
            <Button onClick={this.cancelOrder} color="primary">
                Cancel
            </Button>
        ) : <div />;

        const orderStatusText = (
            <div style={{
                color: statusColor,
                width: '20rem',
                textAlign: 'left',
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
            
            <div
                style={{
                    padding: '1rem 0rem 1rem 0rem',
                    color: 'black',
                    borderBottom: !isLastChild && '1px solid black',
                }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    {orderStatusText}
                    <RestaurantName restaurantName={orderData.restaurantId} />
                    <div style={{width: '20rem', textAlign: 'right'}}>{orderData.localeTimestamp}</div>
                </div>

                <FoodItems items={orderData.items} />

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

export { OrderItem };