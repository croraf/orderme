import React from 'react';
import MediaQuery from 'react-responsive';


import { RestaurantsListContainer } from './RestaurantsList/RestaurantsListContainer';
import { TitleRowContainer } from './TitleRow/TitleRowContainer';
import { Switch, Route } from 'react-router';
import { restaurantDetailsRenderer } from './RestaurantDetails/restaurantDetailsRenderer';
import { OrdersContainer } from './Orders/OrdersContainer';

const containerStyleFullHd = {
    position: 'relative',
    width: '800px',
    minWidth: '800px',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center'
};

const containerStyleHD = Object.assign({}, containerStyleFullHd, {width: '700px', minWidth: '700px'});


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
                    <div style={containerStyleHD}>
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
