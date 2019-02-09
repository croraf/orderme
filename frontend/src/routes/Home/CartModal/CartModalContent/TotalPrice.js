import React from 'react';


class TotalPrice extends React.Component {
    render() {
        const {foodItems} = this.props;

        let totalPrice = 0;
        const arrayOfFoodItems = Object.values(foodItems);
        arrayOfFoodItems.forEach(foodItem => {
            totalPrice += foodItem.quantity * foodItem.price;
        });

        return (
            <div
                style={{
                    padding: '1.2rem 0rem 0rem 0rem',
                    display: 'flex',
                    justifyContent: 'right',
                    fontSize: '1.1rem'
                }}
            >
                TOTAL: {totalPrice.toFixed(2)} kn
            </div>
        );
    }
}

export {TotalPrice};
