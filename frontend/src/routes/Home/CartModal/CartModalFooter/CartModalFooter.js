import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import { OrderButtonContainer } from './OrderButtonContainer';

class CartModalFooter extends React.Component {
    render() {
        const {loginStatus, ordersHistoryButtonClickHandler} = this.props;

        const ordersHistoryButtonComponent = loginStatus ? (
            <Button onClick={ordersHistoryButtonClickHandler} color='primary' style={{fontSize: '1.2rem'}}>
                ORDERS HISTORY
            </Button>
        ) : <div />;



        return (
            <div style={{
                margin: '0.5rem 1.5rem 1rem 1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                {ordersHistoryButtonComponent}
                <OrderButtonContainer />
            </div>
        );
    }
}

export {CartModalFooter};
