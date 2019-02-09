import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';

class CartModalFooter extends React.Component {
    render() {
        const {loginStatus, orderButtonClickHandler, ordersHistoryButtonClickHandler} = this.props;

        const orderButtonComponent = loginStatus ? (
            <Button onClick={orderButtonClickHandler} color="primary" style={{fontSize: '1.2rem'}}>
                Order
            </Button>
        ) : <div style={{fontSize: '1.2rem'}}>LOG IN TO ORDER (!)</div>;

        const ordersHistoryButtonComponent = loginStatus ? (
            <Button onClick={this.props.ordersHistoryButtonClickHandler} color='primary' style={{fontSize: '1.2rem'}}>
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
                {orderButtonComponent}
            </div>
        );
    }
}

export {CartModalFooter};
