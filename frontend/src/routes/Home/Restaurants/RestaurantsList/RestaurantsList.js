import React from 'react';

import burgerImage from './burger.png';

class RestaurantsList extends React.Component {

    render() {

        const {listOfRestaurants, openOnly, area} = this.props;

        return (
            <div style={{
                width: '100%',
                marginTop: '0px',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                minHeight: '800px',
                alignContent: 'flex-start'
            }}>
                {listOfRestaurants.map((restaurant) => {

                    const restaurantDiv = (
                        <div 
                            onClick={() => {this.props.onRestaurantClickHandler(restaurant.name);}}
                            key={restaurant.name}
                            style={{
                                backgroundImage: `url(${burgerImage})`,
                                backgroundSize: '256px 256px',
                                backgroundColor: !restaurant.open && 'grey',
                                width: '256px',
                                height: '256px',
                                margin: '4px',
                                border: '1px solid red',
                                cursor: 'pointer'
                            }}>{restaurant.name} ({restaurant.area}; {restaurant.open ? 'open' : 'closed'})</div>
                    );

                    if (
                        openOnly && !restaurant.open || 
                        area && restaurant.area !== area
                    ) {
                        return undefined;
                    } else {
                        return restaurantDiv;
                    }
                })}
            </div>
        );
    }
}

export {RestaurantsList};
