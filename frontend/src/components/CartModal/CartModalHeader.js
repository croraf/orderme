
import React from 'react';

import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';

class CartModalHeader extends React.Component {

    render() {

        return (
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
                    onClick={this.props.handleClose}
                >
                    <CloseIcon />
                </div>
            </div>
        );
    }
}

export { CartModalHeader };