import React from 'react';

class CartFilledNotification extends React.Component {

    render() {
        return (
            <div style={{color: 'red'}}>{this.props.count}</div>
        );
    }
}

export {CartFilledNotification};