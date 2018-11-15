import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {OrdersContent} from './OrdersContent';

const mapStateToProps = (state) => ({
    orders: state.orders
});

const mapDispatchToProps = (dispatch) => ({
});

const OrdersContentContainer = connect(mapStateToProps, mapDispatchToProps)(OrdersContent);

export {OrdersContentContainer};
