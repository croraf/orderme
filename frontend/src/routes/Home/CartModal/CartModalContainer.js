import {connect} from 'react-redux';
import {CartModal} from './CartModal';

const mapStateToProps = (state) => ({
    open: state.modal
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => {dispatch({type: 'CLOSE_MODAL'});},
});

const CartModalContainer = connect(mapStateToProps, mapDispatchToProps)(CartModal);

export {CartModalContainer};