import React from 'react';


class RestaurantDetails extends React.Component {

    render() {

        const restaurantName = this.props.match.params.restaurantName;

        return (
            <div>{restaurantName}</div>
        );
    }
}

export {RestaurantDetails};
