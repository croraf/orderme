import {connect} from 'react-redux';
import {CartModalContent} from './CartModalContent';

const mapStateToProps = (state) => ({
    cartRestaurantIds: Object.keys(state.cart),
    orders: state.orders
});

const mapDispatchToProps = (dispatch) => ({
});

const CartModalContentContainer = connect(mapStateToProps, mapDispatchToProps)(CartModalContent);

export {CartModalContentContainer};