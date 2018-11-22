import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import { CartModalContentContainer } from './CartModalContentContainer';
import { CartModalHeader } from './CartModalHeader';
import { CartFilledNotificationContainer } from './CartFilledNotification/CartFilledNotificationContainer';

import CartIcon from '@material-ui/icons/ShoppingCart';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class CartModal extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <React.Fragment>
                <div style={{
                    display: 'flex',
                    height: '75%',
                    margin: 'auto 0px',
                }}>
                    <Button variant='outlined' color='primary' onClick={this.handleClickOpen}><CartIcon /></Button>
                    <CartFilledNotificationContainer />
                </div>
                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <CartModalHeader handleClose={this.handleClose}/>
                    

                    <DialogContent>
                        <CartModalContentContainer closeModal={this.handleClose}/>
                    </DialogContent>
                </Dialog>
            </React.Fragment>
        );
    }
}

export {CartModal};