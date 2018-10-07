

import React from 'react';
import DialogContentText from '@material-ui/core/DialogContentText';

class CartModalContent extends React.Component {
    
    render() {

        const {cartData} = this.props;

        return (
            <div>
                {Object.keys(cartData).map(restaurantId => (
                    <DialogContentText key={restaurantId} id="alert-dialog-slide-description">
                        {restaurantId + ': ' + JSON.stringify(cartData[restaurantId])}                                
                    </DialogContentText>
                ))}
                
            </div>
        );
    }
}

export {CartModalContent};