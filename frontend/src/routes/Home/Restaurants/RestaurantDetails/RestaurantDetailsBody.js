import React from 'react';
import { FoodItemContainer } from './FoodItem/FoodItemContainer';


class RestaurantDetailsBody extends React.Component {

    render() {
        const {restaurantDetails, fetching} = this.props;

        if (fetching) {
            return <div>... fetching ...</div>;
        }

        return (
            <div style={{
            }}>
                <div>
                    {restaurantDetails.area},      {restaurantDetails.open ? 'OPEN' : 'CLOSED'}
                </div>

                <div 
                    style={{
                        marginTop: '20px',
                        borderTop: '1px solid black',
                        padding: '5px',
                        overflowY: 'scroll'
                    }}    
                >
                    {restaurantDetails.foods.map(foodItem => (
                        <FoodItemContainer key={foodItem.name} foodItem={foodItem} />
                    ))}
                </div>
            </div>
            
        );
    }
}

export {RestaurantDetailsBody};
