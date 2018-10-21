import {connect} from 'react-redux';
import CustomLinearProgress from './CustomLinearProgress';
import {cancelOrder} from 'Modules/orders';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch) => ({
    linearProgressFinishedHandler: (orderId) => {dispatch(cancelOrder(orderId));}
});

const CustomLinearProgressContainer = connect(mapStateToProps, mapDispatchToProps)(CustomLinearProgress);

export {CustomLinearProgressContainer};