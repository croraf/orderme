import React from 'react';
import { RestaurantDetailsBodyContainer } from './RestaurantDetailsBodyContainer';

class RestaurantDetails extends React.Component {

    render() {
        const {restaurantName, onReturnToListOfRestaurantsHandler} = this.props;

        return (
            <div style={{
                height: '100%',
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

                    <button onClick={onReturnToListOfRestaurantsHandler}>Return to list of restaurants</button>
                </div>
                

                <RestaurantDetailsBodyContainer/>
            </div>
            
        );
    }
}

export {RestaurantDetails};
