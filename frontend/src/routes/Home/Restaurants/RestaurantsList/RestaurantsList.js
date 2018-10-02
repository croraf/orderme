import React from 'react';

import { RestaurantsListBody } from './RestaurantsListBody';
import { FilterRowContainer } from './FilterRow/FilterRowContainer';

class RestaurantsList extends React.Component {

    render() {

        const {listOfRestaurants, openOnly, area, onRestaurantClickHandler} = this.props;

        return (
            <div>
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
