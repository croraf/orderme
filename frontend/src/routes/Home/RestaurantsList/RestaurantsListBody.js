import React from 'react';

import food8 from './food8.jpg';
import food9 from './food9.jpg';

class RestaurantsListBody extends React.Component {

    render() {

        const {listOfRestaurants, openOnly, area} = this.props;

        return (
            <div style={{
                width: '100%',
                margin: '0.4rem 0rem 2rem 0rem',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'flex-start',
                justifyContent: 'center'
            }}>
                {listOfRestaurants.map((restaurant, index) => {

                    const restaurantDiv = (
                        <div
                            key={restaurant.name}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '23%',
                                margin: '3%',
                                marginBottom: '0%',
                            }}
                        >
                            <div 
                                onClick={() => {this.props.onRestaurantClickHandler(restaurant.name);}} 
                                style={{
                                    backgroundImage: index % 2 ? `url(${food8})` : `url(${food9})`,
                                    backgroundSize: '100% 100%',
                                    backgroundPositionY: 'bottom',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundColor: !restaurant.open && 'grey',
                                    width: '100%',
                                    height: '0px',
                                    paddingTop: '100%',
                                    border: '1px solid red',
                                    borderRadius: '3px',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    opacity: restaurant.open ? 1 : 0.25
                                }}>
                                
                            </div>
                            <div style={{
                                paddingTop: '1%',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                fontSize: '1rem',
                            }}>
                                <div 
                                    onClick={() => {this.props.onRestaurantClickHandler(restaurant.name);}}
                                    style={{
                                        fontSize: '1.3rem',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {restaurant.name}
                                </div>
                                <div>({restaurant.area})</div>
                                <div style={{color: restaurant.open ? 'black' : 'red'}}>{restaurant.open ? 'OPEN' : 'CLOSED'}</div>
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
