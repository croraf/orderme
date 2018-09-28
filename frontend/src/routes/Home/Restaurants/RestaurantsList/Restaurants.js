import React from 'react';

import { RestaurantsList } from './RestaurantsList';
import { FilterRowContainer } from './FilterRow/FilterRowContainer';

class Restaurants extends React.Component {

    render() {

        const {listOfRestaurants, openOnly, area, onRestaurantClickHandler} = this.props;

        return (
            <div>
                <FilterRowContainer />
                <RestaurantsList 
                    listOfRestaurants={listOfRestaurants}
                    openOnly={openOnly}
                    area={area}
                    onRestaurantClickHandler={onRestaurantClickHandler}
                />
            </div>
        );
    }
}

export {Restaurants};
