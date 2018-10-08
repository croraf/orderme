import {connect} from 'react-redux';
import {CartModal} from './CartModal';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    orderButtonHandler: () => {alert('You have sent your orders for confirmation');}
});

const CartModalContainer = connect(mapStateToProps, mapDispatchToProps)(CartModal);

export {CartModalContainer};