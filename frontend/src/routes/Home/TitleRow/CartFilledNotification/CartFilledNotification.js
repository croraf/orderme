import React from 'react';

class CartFilledNotification extends React.Component {

    render() {
        return (
            <div style={{color: 'red', fontSize: '1.1rem'}}>{this.props.count}</div>
        );
    }
}

export {CartFilledNotification};