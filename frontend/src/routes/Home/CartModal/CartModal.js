import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { CartModalContentContainer } from './CartModalContentContainer';
import { CartModalHeader } from './CartModalHeader';
import { CartModalFooter } from './CartModalFooter';
import { DeliveryData } from './DeliveryData/DeliveryData';
import { OrderListContainer } from './OrderList/OrderListContainer';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class CartModal extends React.Component {

    render() {

        const {open, closeModal, onFullOrdersButtonClickHandler} = this.props;
        return (
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={closeModal}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <CartModalHeader handleClose={closeModal}/>
                
                <div style={{padding: '0rem 1.5rem'}}>
                    <CartModalContentContainer closeModal={closeModal}/>
                </div>

                <div style={{padding: '0rem 1.5rem 1rem 1.5rem', textAlign: 'center'}}>
                    <DeliveryData />
                </div>

                <div style={{padding: '0rem 1.5rem'}}>
                    <OrderListContainer />
                </div>

                <div style={{paddingBottom: '1rem'}}>
                    <CartModalFooter onFullOrdersButtonClickHandler={onFullOrdersButtonClickHandler}/>
                </div>
                
            </Dialog>
        );
    }
}

export {CartModal};