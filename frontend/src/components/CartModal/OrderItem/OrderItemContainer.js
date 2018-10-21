import {connect} from 'react-redux';
import {OrderItem} from './OrderItem';

import {cancelOrder} from 'Modules/orders';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch) => ({
    cancelOrderClickHandler: (orderId) => {dispatch(cancelOrder(orderId));}
});

const OrderItemContainer = connect(mapStateToProps, mapDispatchToProps)(OrderItem);

export {OrderItemContainer};