import React from 'react';
import { FoodItemContainer } from './FoodItem/FoodItemContainer';
import CustomSpinner from 'Components/CustomSpinner/CustomSpinner';

class RestaurantDetailsBody extends React.Component {

    render() {
        const {restaurantDetails, fetching} = this.props;

        if (fetching) {
            return <CustomSpinner />;
        }

        return (
            <div>
                <div>
                    {restaurantDetails.area},      {restaurantDetails.open ? 'OPEN' : 'CLOSED'}
                </div>

                <div 
                    style={{
                        marginTop: '20px',
                        borderTop: '1px solid black',
                        padding: '5px'
                    }}    
                >
                    {restaurantDetails.foods.map(foodItem => (
                        <FoodItemContainer key={foodItem.name} foodItem={foodItem} restaurantId={restaurantDetails.name}/>
                    ))}
                </div>
            </div>
            
        );
    }
}

export {RestaurantDetailsBody};
