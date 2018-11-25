import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import { CartModalContentContainer } from './CartModalContentContainer';
import { CartModalHeader } from './CartModalHeader';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class CartModal extends React.Component {

    render() {

        const {open, closeModal} = this.props;
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
                
                <DialogContent>
                    <CartModalContentContainer closeModal={closeModal}/>
                </DialogContent>
            </Dialog>
        );
    }
}

export {CartModal};