import React from 'react';

class CartFilledNotification extends React.Component {

    render() {
        const {count} = this.props;

        if (count === 0) {
            return null;
        }

        return (
            <div style={{color: 'red', fontSize: '1.1rem', marginRight: '-5px', marginBottom: '10px'}}>{count}</div>
        );
    }
}

export {CartFilledNotification};