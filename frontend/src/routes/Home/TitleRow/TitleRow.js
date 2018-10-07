import React from 'react';
import Button from '@material-ui/core/Button';

class TitleRow extends React.Component {
    render() {

        return (
            <div style={{
                width: '99%',
                margin: '20px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <div style={{
                    fontSize: 35
                }}>order.me</div>

                <Button variant='outlined' color='primary' onClick={() => {this.props.onCartClickHandler(this.props.cart);}}>Cart</Button>

                <Button variant='outlined' color='secondary' onClick={this.props.onLogoutHandler}>Log out</Button>
                
            </div>
        );
    }
}

export {TitleRow};
