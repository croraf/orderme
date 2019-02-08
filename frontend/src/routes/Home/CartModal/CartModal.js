import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { CartModalContentContainer } from './CartModalContentContainer';
import { CartModalHeader } from './CartModalHeader';
import { CartModalFooter } from './CartModalFooter';
import { OrderListContainer } from './OrderList/OrderListContainer';
import DeliveryDataForm from './DeliveryData/DeliveryDataForm';

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
                <div>
                    <CartModalHeader handleClose={closeModal}/>
                    
                    <div style={{padding: '0rem 1.5rem'}}>
                        <div style={{
                            minWidth: '500px',
                            borderTop: '5px solid black',
                            // borderBottom: '5px solid black',
                            minHeight: '500px',
                            padding: '5px 0px 0px',
                            margin: '0px 0px 10px 0px'
                        }}>
                            <CartModalContentContainer closeModal={closeModal}/>
                        </div>
                    </div>

                    {/* <div style={{padding: '0rem 1.5rem 1rem 1.5rem'}}>
                        <DeliveryDataForm />
                    </div> */}

                    {/* <div style={{padding: '0rem 1.5rem'}}>
                        <OrderListContainer />
                    </div> */}

                    {/* <div style={{paddingBottom: '1rem'}}>
                        <CartModalFooter onFullOrdersButtonClickHandler={onFullOrdersButtonClickHandler}/>
                    </div> */}
                </div>
            </Dialog>
        );
    }
}

export {CartModal};