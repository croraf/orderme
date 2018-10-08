

import React from 'react';
/* import DialogContentText from '@material-ui/core/DialogContentText'; */

class CartModalContent extends React.Component {

    render() {

        const { cartData } = this.props;

        return (
            <div style={{
                minWidth: '500px',
                borderTop: '1px solid black',
                borderBottom: '1px solid black',
                minHeight: '100px'
            }}>
                {Object.keys(cartData).map(restaurantId => (
                    <div
                        key={restaurantId}
                        style={{
                            padding: '10px 0px'
                        }}
                    >
                        <div>{restaurantId}:</div>
                        <div>{JSON.stringify(cartData[restaurantId])}</div>
                    </div>
                ))}
            </div>

        );
    }
}

export { CartModalContent };