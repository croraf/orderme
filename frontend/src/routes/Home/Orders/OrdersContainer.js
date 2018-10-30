import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {Orders} from './Orders';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    onReturnToListOfRestaurantsHandler: () => {dispatch(push('/home'));}
});

const OrdersContainer = connect(mapStateToProps, mapDispatchToProps)(Orders);

export {OrdersContainer};
