import React from 'react';
import MediaQuery from 'react-responsive';


import { RestaurantsListContainer } from './RestaurantsList/RestaurantsListContainer';
import { TitleRowContainer } from './TitleRow/TitleRowContainer';
import { Switch, Route } from 'react-router';
import { restaurantDetailsRenderer } from './RestaurantDetails/restaurantDetailsRenderer';
import { OrdersContainer } from './Orders/OrdersContainer';

const containerWidth = 800;

const containerStyleFullHd = {
    position: 'relative',
    width: containerWidth + 'px',
    minWidth: containerWidth + 'px',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    fontSize: '1rem'
};

const containerStyleHdOverrides = {
    width: (containerWidth * 0.87) + 'px',
    minWidth: (containerWidth * 0.87) + 'px',
    fontSize: '0.87rem',
};

const containerStyleHd = Object.assign({}, containerStyleFullHd, containerStyleHdOverrides);


class Home extends React.Component {

    componentWillMount() {
        this.props.loadInitialHomeRouteData();
    }

    render() {

        const homeRouter = (
            <Switch>
                <Route exact={true} path={'/'} component={RestaurantsListContainer} />
                <Route path={'/restaurants/:restaurantName'} component={restaurantDetailsRenderer}/>
                <Route path={'/orders'} component={OrdersContainer}/>
            </Switch>
        );

        return (
            <div style={{
                /* position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center', */
            }}>
                {/* <div style={{
                    minWidth: '200px'
                }}><img src='https://picsum.photos/200/600' /></div> */}

                <MediaQuery query='(max-device-width: 1700px)'>
                    <div style={containerStyleHd}>
                        <TitleRowContainer />
                        {homeRouter}
                    </div>
                </MediaQuery>

                <MediaQuery query='(min-device-width: 1701px)'>
                    <div style={containerStyleFullHd}>
                        <TitleRowContainer />
                        {homeRouter}
                    </div>
                </MediaQuery>
                
                {/* <div style={{
                    minWidth: '200px'
                }}><img src='https://picsum.photos/300/300' /></div> */}
            </div>
        );
    }
}

export { Home };
