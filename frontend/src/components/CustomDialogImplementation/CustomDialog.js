import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class CustomDialog extends React.Component {
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

        const {openDialogButtonLabel, dialogTitle, dialogContent, dialogAction1, dialogAction2} = this.props;
        return (
            <div>
                <Button variant='outlined' color='primary' onClick={this.handleClickOpen}>{openDialogButtonLabel}</Button>
                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {dialogTitle}
                    </DialogTitle>
                    <DialogContent>
                        {dialogContent || <div>abc</div>}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            {dialogAction1}
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            {dialogAction2}
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export {CustomDialog};