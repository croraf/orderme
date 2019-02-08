import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { CartModalContentContainer } from './CartModalContentContainer';
import { CartModalHeader } from './CartModalHeader';
import { CartModalFooter } from './CartModalFooter';
import { OrderListContainer } from './OrderList/OrderListContainer';
import DeliveryDataForm from './DeliveryData/DeliveryDataForm';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class CartModal extends React.Component {

    render() {

        const {open, closeModal, onFullOrdersButtonClickHandler, loginStatus, orderButtonClickHandler} = this.props;

        const orderButtonComponent = loginStatus ? (
            <Button onClick={() => {orderButtonClickHandler();}} color="primary">
                Order
            </Button>
        ) : <div>LOG IN TO ORDER (!)</div>;

        return (
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={closeModal}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <div
                    style={{
                        minWidth: '500px',
                    }}
                >
                    <CartModalHeader handleClose={closeModal}/>
                    
                    <div style={{padding: '0rem 1.5rem'}}>
                        <div style={{
                            minHeight: '100px',
                            borderTop: '5px solid black',
                            borderBottom: '5px solid black',
                            padding: '5px 0px 0px',
                            margin: '0px 0px 10px 0px'
                        }}>
                            <CartModalContentContainer closeModal={closeModal}/>
                        </div>
                    </div>

                    <div style={{
                        margin: '0rem 1.5rem 0.5rem 1.5rem',
                        borderBottom: '5px solid black',
                        paddingBottom: '0.5rem',
                    }}>
                        <DeliveryDataForm />
                    </div>

                    {/* <div style={{padding: '0rem 1.5rem'}}>
                        <OrderListContainer />
                    </div>

                    <div style={{paddingBottom: '1rem'}}>
                        <CartModalFooter onFullOrdersButtonClickHandler={onFullOrdersButtonClickHandler}/>
                    </div> */}

                    <div style={{
                        margin: '0rem 1.5rem 1rem 1.5rem',
                    }}>
                        <DialogActions>
                            {orderButtonComponent}
                        </DialogActions>
                    </div>
                </div>
            </Dialog>
        );
    }
}

export {CartModal};