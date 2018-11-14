import {connect} from 'react-redux';

import {Home} from './Home';
import { fetchOrders } from 'Modules/orders';


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    loadInitialHomeRouteData: () => {dispatch(fetchOrders());},
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export {HomeContainer};
