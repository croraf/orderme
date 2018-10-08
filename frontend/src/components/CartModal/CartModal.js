import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { CartModalContentContainer } from './CartModalContentContainer';

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

    handleOrder = () => {
        this.props.orderButtonHandler();
        this.handleClose();
    }

    render() {
        return (
            <div>
                <Button variant='outlined' color='primary' onClick={this.handleClickOpen}>Cart content</Button>
                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        Manage cart & Checkout
                    </DialogTitle>
                    <DialogContent>
                        <CartModalContentContainer />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleOrder} color="primary">
                            Order
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export {CartModal};