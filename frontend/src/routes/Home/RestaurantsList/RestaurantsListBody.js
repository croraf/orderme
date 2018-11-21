import React from 'react';

import burgerImage from './burger.png';

class RestaurantsListBody extends React.Component {

    render() {

        const {listOfRestaurants, openOnly, area} = this.props;

        return (
            <div style={{
                width: '100%',
                marginTop: '0px',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'flex-start'
            }}>
                {listOfRestaurants.map((restaurant) => {

                    const restaurantDiv = (
                        <div 
                            onClick={() => {this.props.onRestaurantClickHandler(restaurant.name);}}
                            key={restaurant.name}
                            style={{
                                backgroundImage: `url(${burgerImage})`,
                                backgroundSize: '100% 100%',
                                backgroundColor: !restaurant.open && 'grey',
                                width: '32%',
                                paddingTop: '32%',
                                margin: '0.5%',
                                border: '1px solid red',
                                borderRadius: '3px',
                                cursor: 'pointer',
                                position: 'relative'
                            }}>
                            <div style={{position: 'absolute', top: '0px'}}>
                                {restaurant.name} ({restaurant.area}; {restaurant.open ? 'open' : 'closed'})
                            </div>
                        </div>
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

export {RestaurantsListBody};
