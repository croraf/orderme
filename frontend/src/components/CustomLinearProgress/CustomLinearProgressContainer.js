import {connect} from 'react-redux';
import CustomLinearProgress from './CustomLinearProgress';
import {cancelOrder} from 'Modules/cart';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch) => ({
    linearProgressFinishedHandler: (restaurantId) => {dispatch(cancelOrder(restaurantId));}
});

const CustomLinearProgressContainer = connect(mapStateToProps, mapDispatchToProps)(CustomLinearProgress);

export {CustomLinearProgressContainer};