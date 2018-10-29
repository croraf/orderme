import {connect} from 'react-redux';
import CustomLinearProgress from './CustomLinearProgress';
import {fetchOrder} from 'Modules/orders';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch) => ({
    fetchOrderStatusHandler: (orderId) => {dispatch(fetchOrder(orderId));}
});

const CustomLinearProgressContainer = connect(mapStateToProps, mapDispatchToProps)(CustomLinearProgress);

export {CustomLinearProgressContainer};