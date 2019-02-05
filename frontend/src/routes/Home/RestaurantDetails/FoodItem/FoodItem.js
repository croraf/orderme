import React from 'react';
import Button from '@material-ui/core/Button';

class FoodItem extends React.Component {

    render() {
        const {foodItem, addItem, restaurantId} = this.props;

        return (
            <div style={{
                display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '10px 0px'
            }}>
                <div key={foodItem.name}>
                    <div style={{
                        fontSize: '20px',
                        padding: '5px 0px'
                    }}>{foodItem.name}: {foodItem.price.toFixed(2)} kn</div>
                    <div>{foodItem.description}</div>
                </div>
                <Button 
                    variant='outlined'
                    style={{
                        cursor: 'pointer'
                    }}
                    onClick={() => {addItem(restaurantId, foodItem);}}
                >
                    Add to cart
                </Button>
            </div>
            
        );
    }
}

export {FoodItem};
