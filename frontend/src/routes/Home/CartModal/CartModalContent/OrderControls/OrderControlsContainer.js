import {connect} from 'react-redux';
import { OrderControls } from './OrderControls';

import {cancelOrder} from 'Modules/orders';

const mapStateToProps = (state) => {

    return ({
    });
};

const mapDispatchToProps = (dispatch) => ({
    cancelOrderClickHandler: (orderId) => {dispatch(cancelOrder(orderId));}
});

const OrderControlsContainer = connect(mapStateToProps, mapDispatchToProps)(OrderControls);

export {OrderControlsContainer};
