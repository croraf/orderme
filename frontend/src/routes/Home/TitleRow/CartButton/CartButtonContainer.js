import {connect} from 'react-redux';
import { CartButton } from './CartButton';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
    openModal: () => {dispatch({type: 'OPEN_MODAL'});},
});

const CartButtonContainer = connect(mapStateToProps, mapDispatchToProps)(CartButton);

export {CartButtonContainer};
