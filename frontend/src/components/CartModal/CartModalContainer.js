import {connect} from 'react-redux';
import React from 'react';
import {CartModalContent} from './CartModalContent';

import {CustomDialog} from '../CustomDialogImplementation/CustomDialog';

const mapStateToProps = (state) => ({
    openDialogButtonLabel: 'Manage cart',
    dialogTitle: 'Cart content',
    dialogContent: <CartModalContent cartData={state.cart} />,
    dialogAction1: 'Cancel',
    dialogAction2: 'Order'
});

const mapDispatchToProps = (dispatch) => ({
});

const CartModalContainer = connect(mapStateToProps, mapDispatchToProps)(CustomDialog);

export {CartModalContainer};