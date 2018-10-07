import React from 'react';
import { RestaurantDetailsBodyContainer } from './RestaurantDetailsBodyContainer';
import Button from '@material-ui/core/Button';

class RestaurantDetails extends React.Component {

    render() {
        const {restaurantName, onReturnToListOfRestaurantsHandler} = this.props;

        return (
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <div style={{
                        fontSize: '30px'
                    }}>{restaurantName}</div>

                    <Button variant='outlined' onClick={onReturnToListOfRestaurantsHandler}>Return to list of restaurants</Button>
                </div>
                

                <RestaurantDetailsBodyContainer/>
            </div>
            
        );
    }
}

export {RestaurantDetails};
