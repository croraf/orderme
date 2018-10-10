import {connect} from 'react-redux';
import {CartModal} from './CartModal';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    orderButtonHandler: () => {dispatch({type: 'makeOrders'});}
});

const CartModalContainer = connect(mapStateToProps, mapDispatchToProps)(CartModal);

export {CartModalContainer};