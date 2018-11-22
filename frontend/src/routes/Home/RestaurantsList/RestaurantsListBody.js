import React from 'react';

import burgerImage from './burger.png';
import food8 from './food8.jpg';

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
                                backgroundImage: `url(${food8})`,
                                backgroundSize: '100% 100%',
                                backgroundPositionY: 'bottom',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: !restaurant.open && 'grey',
                                width: '31%',
                                paddingTop: '31%',
                                margin: '1%',
                                border: '1px solid red',
                                borderRadius: '3px',
                                cursor: 'pointer',
                                position: 'relative',
                                marginBottom: '10%'
                            }}>
                            <div style={{position: 'relative', top: '110%', display: 'flex', flexDirection: 'column'}}>
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
