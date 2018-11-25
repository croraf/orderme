import {connect} from 'react-redux';
import {CartModal} from './CartModal';
import {push} from 'connected-react-router';

const mapStateToProps = (state) => ({
    open: state.modal
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => {dispatch({type: 'CLOSE_MODAL'});},
    onFullOrdersButtonClickHandler: () => {
        dispatch({type: 'CLOSE_MODAL'});
        dispatch(push('/orders'));
    }
});

const CartModalContainer = connect(mapStateToProps, mapDispatchToProps)(CartModal);

export {CartModalContainer};