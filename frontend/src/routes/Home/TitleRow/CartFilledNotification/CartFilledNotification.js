import React from 'react';

class CartFilledNotification extends React.Component {

    render() {
        const {count} = this.props;

        let color = count === 0 && '#3f51b5';

        return (
            <div style={{color: color || 'red', fontSize: '1.3rem', marginRight: '0px', marginBottom: '0px'}}>
                +{count}
            </div>
        );
    }
}

export {CartFilledNotification};