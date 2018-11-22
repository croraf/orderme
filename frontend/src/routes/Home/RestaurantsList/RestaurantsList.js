import React from 'react';

import { RestaurantsListBody } from './RestaurantsListBody';
import { FilterRowContainer } from './FilterRow/FilterRowContainer';

class RestaurantsList extends React.Component {

    componentWillMount() {
        this.props.loadRouteData();
    }

    render() {

        const {listOfRestaurants, openOnly, area, onRestaurantClickHandler} = this.props;

        return (
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <FilterRowContainer />
                <RestaurantsListBody 
                    listOfRestaurants={listOfRestaurants}
                    openOnly={openOnly}
                    area={area}
                    onRestaurantClickHandler={onRestaurantClickHandler}
                />
            </div>
        );
    }
}

export {RestaurantsList};
