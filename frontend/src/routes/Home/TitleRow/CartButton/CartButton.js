import React from 'react';
import Button from '@material-ui/core/Button';
import CartIcon from '@material-ui/icons/ShoppingCart';

import { CartFilledNotificationContainer } from '../CartFilledNotification/CartFilledNotificationContainer';


class CartButton extends React.Component {
    render() {
        return (
            <div style={{marginRight: '1rem', display: 'flex', justifyContent: 'center'}}>
                <div style={{
                    display: 'flex',
                    height: '2.5rem',
                    margin: 'auto 0px',
                }}>
                    <Button style={{padding: '0rem'}} variant='outlined' color='primary' onClick={this.props.openModal}>
                        <CartIcon />
                        <CartFilledNotificationContainer />
                    </Button>
                    
                </div>
            </div>
        );
    }
}

export {CartButton};
