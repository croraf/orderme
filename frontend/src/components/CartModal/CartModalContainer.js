import {connect} from 'react-redux';
import {CartModal} from './CartModal';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

const CartModalContainer = connect(mapStateToProps, mapDispatchToProps)(CartModal);

export {CartModalContainer};