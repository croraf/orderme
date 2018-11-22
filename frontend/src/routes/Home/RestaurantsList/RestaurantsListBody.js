import React from 'react';

import food8 from './food8.jpg';
import food9 from './food9.jpg';

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
                {listOfRestaurants.map((restaurant, index) => {

                    const restaurantDiv = (
                        <div 
                            onClick={() => {this.props.onRestaurantClickHandler(restaurant.name);}}
                            key={restaurant.name}
                            style={{
                                backgroundImage: index % 2 ? `url(${food8})` : `url(${food9})`,
                                backgroundSize: '100% 100%',
                                backgroundPositionY: 'bottom',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: !restaurant.open && 'grey',
                                width: '31%',
                                height: '0px',
                                paddingTop: '31%',
                                margin: '1%',
                                border: '1px solid red',
                                borderRadius: '3px',
                                cursor: 'pointer',
                                position: 'relative',
                                marginBottom: '9%'
                            }}>
                            <div style={{
                                paddingTop: '1%',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                fontSize: '1rem'
                            }}>
                                <div>{restaurant.name}</div>
                                <div>({restaurant.area})</div>
                                <div>{restaurant.open ? 'open' : 'closed'}</div>
                            </div>
                        </div>
                    );

                    if (
                        openOnly && !restaurant.open || area !== '-' && restaurant.area !== area 
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
