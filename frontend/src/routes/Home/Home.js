import React from 'react';



import { RestaurantsListContainer } from './Restaurants/RestaurantsList/RestaurantsListContainer';
import { TitleRowContainer } from './TitleRow/TitleRowContainer';
import { Switch, Route } from 'react-router';
import { restaurantDetailsRenderer } from './Restaurants/RestaurantDetails/restaurantDetailsRenderer';
import { OrdersContainer } from './Orders/OrdersContainer';

/* import squareImage from './square.png'; */


class Home extends React.Component {

    componentDidMount() {

        /* console.log('Home component mounted');
        const body = document.getElementsByTagName('body')[0];
        body.addEventListener('keypress', this.props.newGuessHandler);

        this.props.fetchNewWordAndDispatchNewWordAction(); */

    }

    render() {

        return (
            <div style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                minWidth: '1200px'
            }}>
                <div style={{
                    minWidth: '200px'
                }}><img src='https://picsum.photos/200/600' /></div>

                <div style={{
                    position: 'relative',
                    minWidth: '800px',
                    maxWidth: '800px',
                    backgroundColor: '#f5f5f5',
                    /* backgroundImage: `url(${squareImage})`,
                    backgroundPosition: 'bottom right',
                    backgroundRepeat: 'no-repeat', */
                    margin: '0px 200px 0px 200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'center'
                }}>

                    <TitleRowContainer />

                    <Switch>
                        <Route exact={true} path={'/home'} component={RestaurantsListContainer} />
                        <Route path={'/home/restaurants/:restaurantName'} component={restaurantDetailsRenderer}/>
                        <Route path={'/home/orders'} component={OrdersContainer}/>
                    </Switch>

                </div>
                
                <div style={{
                    minWidth: '200px'
                }}><img src='https://picsum.photos/300/300' /></div>
            </div>

        );
    }
}

export { Home };
