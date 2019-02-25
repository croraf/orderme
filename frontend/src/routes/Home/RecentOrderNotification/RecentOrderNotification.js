import React from 'react';


class RecentOrderNotification extends React.Component {

    render() {
        const {show} = this.props;

        if (!show) {return null;}

        return (
            <div style={{
                width: '100%',
                backgroundColor: '#ffe100',
                height: '2rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1rem',
            }}>
                <div>You made an order recently. Check it HERE</div>
            </div>
        );
    }
}

export {RecentOrderNotification};
