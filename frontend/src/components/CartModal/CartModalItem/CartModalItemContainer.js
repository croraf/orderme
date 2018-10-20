import {connect} from 'react-redux';
import {CartModalItem} from './CartModalItem';

import { makeOrder } from 'Modules/cart';
import {cancelOrder} from 'Modules/cart';

const mapStateToProps = (state, ownProps) => ({
    restaurantOrderData: state.cart[ownProps.restaurantId]
});

const mapDispatchToProps = (dispatch) => ({
    removeItemFromCartHandler: (deletedId) => {dispatch({type: 'removeItemFromCart', deletedId});},
    orderItemFromCartHandler: (restaurantId) => {dispatch(makeOrder(restaurantId));},
    cancelOrderClickHandler: (restaurantId) => {dispatch(cancelOrder(restaurantId));}
});

const CartModalItemContainer = connect(mapStateToProps, mapDispatchToProps)(CartModalItem);

export {CartModalItemContainer};