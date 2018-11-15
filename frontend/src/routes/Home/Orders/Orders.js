import React from 'react';
import { Button } from '@material-ui/core';
import { OrdersContentContainer } from './OrdersContentContainer';

class Orders extends React.Component {

    render() {
        const {onReturnToListOfRestaurantsHandler} = this.props;

        return (
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '10px'
                }}>
                    <div style={{
                        fontSize: '30px'
                    }}>Your orders</div>

                    <Button variant='outlined' onClick={onReturnToListOfRestaurantsHandler}>Return to list of restaurants</Button>
                </div>
                
                <OrdersContentContainer />
            </div>
        );
    }
}

export {Orders};
