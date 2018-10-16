import {connect} from 'react-redux';
import {CartModalContent} from './CartModalContent';

import { makeOrder } from 'Modules/cart';
import {cancelOrder} from 'Modules/cart';

const mapStateToProps = (state) => ({
    cartData: state.cart
});

const mapDispatchToProps = (dispatch) => ({
    removeItemFromCartHandler: (deletedId) => {dispatch({type: 'removeItemFromCart', deletedId});},
    orderItemFromCartHandler: (restaurantId) => {dispatch(makeOrder(restaurantId));},
    cancelOrderClickHandler: (restaurantId) => {dispatch(cancelOrder(restaurantId));}
});

const CartModalContentContainer = connect(mapStateToProps, mapDispatchToProps)(CartModalContent);

export {CartModalContentContainer};