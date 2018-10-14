import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { CartModalContentContainer } from './CartModalContentContainer';
import CloseIcon from '@material-ui/icons/Close';

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
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <DialogTitle id="alert-dialog-slide-title">
                            Manage cart & Checkout
                        </DialogTitle>
                        <div 
                            style={{
                                margin: '24px 24px 20px 24px',
                                cursor: 'pointer'
                            }}
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </div>
                    </div>
                    

                    <DialogContent>
                        <CartModalContentContainer />
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export {CartModal};