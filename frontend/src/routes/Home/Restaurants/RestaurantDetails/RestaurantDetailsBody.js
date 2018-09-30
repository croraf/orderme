import React from 'react';

const foodItemRenderer = (food) => {

    return (
        <div key={food.name}>
            <div style={{
                fontSize: '20px',
                padding: '5px 0px'
            }}>{food.name}: {food.price} kn</div>
            <div>{food.description}</div>
        </div>
    );
};

class RestaurantDetailsBody extends React.Component {

    render() {
        const {restaurantDetails, fetching} = this.props;

        if (fetching) {
            return <div>... fetching ...</div>;
        }

        return (
            <div>
                <div>
                    {restaurantDetails.area},      {restaurantDetails.open ? 'OPEN' : 'CLOSED'}
                </div>
                <div style={{
                    marginTop: '20px',
                    borderTop: '1px solid black',
                    padding: '5px'
                }}>
                    {restaurantDetails.foods.map(food => foodItemRenderer(food))}
                </div>
            </div>
            
        );
    }
}

export {RestaurantDetailsBody};
