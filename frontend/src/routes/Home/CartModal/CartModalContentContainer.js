import {connect} from 'react-redux';
import {CartModalContent} from './CartModalContent';

import { makeOrder } from 'Modules/orders';

const mapStateToProps = (state) => ({
    cart: state.cart,
    loginStatus: state.login.token,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    orderItemFromCartHandler: (restaurantId) => {dispatch(makeOrder(restaurantId));},
});

const CartModalContentContainer = connect(mapStateToProps, mapDispatchToProps)(CartModalContent);

export {CartModalContentContainer};