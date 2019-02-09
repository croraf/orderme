

import React from 'react';
import {FoodItems} from 'Components/FoodItems/FoodItems';
import {TotalPrice} from './TotalPrice';
import { RestaurantName } from './RestaurantName';

class CartModalContent extends React.Component {

    render() {
        const { cart } = this.props;

        if (cart.restaurantId === undefined) {
            return (
                <div
                    style={{
                        padding: '1rem 0rem 1rem 0rem'
                    }}
                >
                    <RestaurantName restaurantName='CART IS EMPTY' />
                </div>
            );   
        }

        return (
            <div
                style={{
                    padding: '1rem 0rem 1rem 0rem'
                }}
            >
                <RestaurantName restaurantName={cart.restaurantId} />

                <FoodItems items={cart.foodItems} restaurantId={cart.restaurantId} editable={true} />

                <TotalPrice foodItems={cart.foodItems} />
            </div>
        );
    }
}

export { CartModalContent };