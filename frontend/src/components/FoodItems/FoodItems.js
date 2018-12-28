import React from 'react';

class FoodItems extends React.Component {

    render() {
        const {items} = this.props;

        return (
            <ul style={{
                margin: '5px 0px 0px 0px'
            }}>
                {items.map((foodItem, index) => <li key={index}>{foodItem}</li>)}
            </ul>
        );
    }
}

export {FoodItems};