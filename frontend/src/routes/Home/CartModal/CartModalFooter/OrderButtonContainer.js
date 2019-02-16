import {connect} from 'react-redux';
import {OrderButton} from './OrderButton';

import { makeOrder } from 'Modules/orders';

const mapStateToProps = (state) => ({
    loginStatus: state.login.token ? true : false,
    cartFilled: state.cart.restaurantId ? true : false,
    cartStatus: state.cart.status,
});

const mapDispatchToProps = (dispatch) => ({
    orderButtonClickHandler: () => {dispatch(makeOrder());},
});

const OrderButtonContainer = connect(mapStateToProps, mapDispatchToProps)(OrderButton);

export {OrderButtonContainer};
