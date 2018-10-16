import {connect} from 'react-redux';
import CustomLinearProgress from './CustomLinearProgress';
import {cancelOrder} from 'Modules/cart';

const mapStateToProps = (state, ownProps) => ({
    orderStatus: state.cart[ownProps.restaurantId].orderStatus
});

const mapDispatchToProps = (dispatch) => ({
    linearProgressFinishedHandler: (restaurantId) => {dispatch(cancelOrder(restaurantId));}
});

const CustomLinearProgressContainer = connect(mapStateToProps, mapDispatchToProps)(CustomLinearProgress);

export {CustomLinearProgressContainer};