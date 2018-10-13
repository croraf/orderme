import {connect} from 'react-redux';
import {CartModal} from './CartModal';
import { makeOrders } from 'Modules/cart';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    orderButtonHandler: () => {dispatch(makeOrders());}
});

const CartModalContainer = connect(mapStateToProps, mapDispatchToProps)(CartModal);

export {CartModalContainer};