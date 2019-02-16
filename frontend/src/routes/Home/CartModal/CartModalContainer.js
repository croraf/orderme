import {connect} from 'react-redux';
import {CartModal} from './CartModal';
import {push} from 'connected-react-router';

const mapStateToProps = (state) => ({
    open: state.modal,
    loginStatus: state.login.token,
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => {dispatch({type: 'CLOSE_MODAL'});},
    ordersHistoryButtonClickHandler: () => {
        dispatch({type: 'CLOSE_MODAL'});
        dispatch(push('/orders'));
    },
});

const CartModalContainer = connect(mapStateToProps, mapDispatchToProps)(CartModal);

export {CartModalContainer};