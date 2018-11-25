import {connect} from 'react-redux';
import { OrderList } from './OrderList';

const mapStateToProps = (state) => ({
    orders: state.orders,
});

const mapDispatchToProps = () => ({
});

const OrderListContainer = connect(mapStateToProps, mapDispatchToProps)(OrderList);

export {OrderListContainer};
