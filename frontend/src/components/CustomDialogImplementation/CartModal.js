import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { DialogContentText } from '@material-ui/core';
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
                        {children[0]}
                    </DialogTitle>
                    <DialogContent>
                        <CartModalContentContainer
                        {Object.keys(cartData).map(restaurantId => (
                            <DialogContentText key={restaurantId} id="alert-dialog-slide-description">
                                {restaurantId + ': ' + JSON.stringify(cartData[restaurantId])}                                
                            </DialogContentText>
                        ))}
                    </DialogContent>
                    <DialogActions>
                        {children[2]}
                        {/* <Button onClick={this.handleClose} color="primary">
                            {dialogAction1}
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            {dialogAction2}
                        </Button> */}
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export {CartModal};