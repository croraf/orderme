import React from 'react';
import {FoodItemContainer} from './FoodItemContainer';
class FoodItems extends React.Component {

    render() {
        const {items, editable=false} = this.props;

        const itemsComponents = Object.values(items).map(
            foodItem => {
                return <FoodItemContainer key={foodItem.name} foodItem={foodItem} editable={editable} />;
            }
        );

        return (
            <ul style={{
                margin: '5px 0px 0px 0px',
                marginLeft: '-1rem',
            }}>
                {itemsComponents}
            </ul>
        );
    }
}

export {FoodItems};