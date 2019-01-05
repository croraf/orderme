import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { restaurantDetailsRenderer } from './RestaurantDetails/restaurantDetailsRenderer';
import { OrdersContainer } from './Orders/OrdersContainer';
import { RestaurantsListContainer } from './RestaurantsList/RestaurantsListContainer';

class HomeRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact={true} path={'/'} component={RestaurantsListContainer} />
                <Route path={'/restaurants/:restaurantName'} component={restaurantDetailsRenderer}/>
                <Route path={'/orders'} component={OrdersContainer}/>
            </Switch>
        );
    }
}

export {HomeRouter};
