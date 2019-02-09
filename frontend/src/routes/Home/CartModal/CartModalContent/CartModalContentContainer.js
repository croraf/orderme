import {connect} from 'react-redux';
import {CartModalContent} from './CartModalContent';

const mapStateToProps = (state) => ({
    cart: state.cart,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

const CartModalContentContainer = connect(mapStateToProps, mapDispatchToProps)(CartModalContent);

export {CartModalContentContainer};