import {connect} from 'react-redux';
import {CartModalItem} from './CartModalItem';

import { makeOrder } from 'Modules/cart';

const mapStateToProps = (state, ownProps) => ({
    restaurantOrderData: state.cart[ownProps.restaurantId]
});

const mapDispatchToProps = (dispatch) => ({
    orderItemFromCartHandler: (restaurantId) => {dispatch(makeOrder(restaurantId));}
});

const CartModalItemContainer = connect(mapStateToProps, mapDispatchToProps)(CartModalItem);

export {CartModalItemContainer};