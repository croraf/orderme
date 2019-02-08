

import React from 'react';
import {FoodItems} from 'Components/FoodItems/FoodItems';

class CartModalContent extends React.Component {

    render() {
        const { cart } = this.props;

        if (cart.restaurantId === undefined) {
            return null;
        }

        let totalPrice = 0;
        const arrayOfFoodItems = Object.values(cart.foodItems);
        arrayOfFoodItems.forEach(foodItem => {
            totalPrice += foodItem.quantity * foodItem.price;
        });

        return (
            <div
                style={{
                    padding: '1rem 0rem 1rem 0rem'
                }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <div style={{
                        fontWeight: 'bold'
                    }}>{cart.restaurantId}:</div>
                </div>

                <FoodItems items={cart.foodItems} restaurantId={cart.restaurantId} editable={true} />

                <div
                    style={{
                        padding: '1rem 0rem 0rem 0rem',
                        display: 'flex',
                        justifyContent: 'right',
                        fontSize: '1.2rem'
                    }}
                >TOTAL: {totalPrice.toFixed(2)} kn</div>
            </div>
        );
    }
}

export { CartModalContent };