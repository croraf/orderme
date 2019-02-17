import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { CartModalContentContainer } from './CartModalContent/CartModalContentContainer';
import { CartModalHeader } from './CartModalHeader';
import { CartModalFooter } from './CartModalFooter/CartModalFooter';
import DeliveryDataForm from './DeliveryData/DeliveryDataForm';
import CustomersNoteForm from './CustomersNoteForm/CustomersNoteForm';
import { withStyles } from '@material-ui/styles';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}


class CartModal extends React.Component {

    render() {
        const {open, closeModal, ordersHistoryButtonClickHandler, loginStatus, classes} = this.props;

        return (
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={closeModal}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                classes={{paper: classes.paper}}
            >
                <div
                    style={{
                        minWidth: '800px',
                    }}
                >
                    <CartModalHeader handleClose={closeModal}/>

                    {/* <div style={{padding: '0rem 1.5rem'}}>
                        { lastOrder && <OrderItemContainer isLastChild={true} orderData={lastOrder}/> }
                    </div> */}
                    
                    <div style={{padding: '0rem 1.5rem'}}>
                        <div style={{
                            minHeight: '100px',
                            borderTop: '5px solid black',
                            padding: '5px 0px 0px',
                            margin: '0px 0px 10px 0px'
                        }}>
                            <CartModalContentContainer closeModal={closeModal}/>
                        </div>
                    </div>


                    <div style={{
                        margin: '0rem 1.5rem 0.5rem 1.5rem',
                        borderBottom: '5px solid black',
                        borderTop: '5px solid black',
                        paddingBottom: '0.5rem',
                    }}>
                        <DeliveryDataForm />
                    </div>

                    <div style={{
                        margin: '0rem 1.5rem 0rem 1.5rem',
                    }}>
                        <CustomersNoteForm />
                    </div>

                    <CartModalFooter 
                        loginStatus={loginStatus}
                        ordersHistoryButtonClickHandler={ordersHistoryButtonClickHandler}
                    />
                </div>
            </Dialog>
        );
    }
}

const classes = {
    paper: {
        maxWidth: '800px',
        width: '800px',
    },
};

const StyledComponent = withStyles(classes)(CartModal);

export {StyledComponent as CartModal};