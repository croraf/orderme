import {connect} from 'react-redux';
import {CartModalItem} from './CartModalItem';

import { makeOrder } from 'Modules/orders';

const mapStateToProps = (state, ownProps) => ({
    restaurantOrderData: state.cart[ownProps.restaurantId],
    loginStatus: state.login.token
});

const mapDispatchToProps = (dispatch) => ({
    orderItemFromCartHandler: (restaurantId) => {dispatch(makeOrder(restaurantId));}
});

const CartModalItemContainer = connect(mapStateToProps, mapDispatchToProps)(CartModalItem);

export {CartModalItemContainer};