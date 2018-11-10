import {connect} from 'react-redux';
import {CartModalContent} from './CartModalContent';
import {push} from 'connected-react-router';

const mapStateToProps = (state) => ({
    cartRestaurantIds: Object.keys(state.cart),
    orders: state.orders
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onFullOrdersButtonClickHandler: () => {
        ownProps.closeModal();
        dispatch(push('/orders'));
    }
});

const CartModalContentContainer = connect(mapStateToProps, mapDispatchToProps)(CartModalContent);

export {CartModalContentContainer};