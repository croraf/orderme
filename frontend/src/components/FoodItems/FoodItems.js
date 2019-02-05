import React from 'react';
import {FoodItem} from './FoodItem';
class FoodItems extends React.Component {

    render() {
        const {items, editable=false} = this.props;

        const itemsComponents = items.map(
            (foodItem, index) => {
                return <FoodItem key={index} foodItem={foodItem} editable={editable} />;
            }
        );

        return (
            <ul style={{
                margin: '5px 0px 0px 0px'
            }}>
                {itemsComponents}
            </ul>
        );
    }
}

export {FoodItems};