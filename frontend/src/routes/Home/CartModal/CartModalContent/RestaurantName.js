import React from 'react';


class RestaurantName extends React.Component {
    render() {
        const {restaurantName} = this.props;

        return (
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <div style={{
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    textAlign: 'center',
                    width: '100%',
                }}>{restaurantName}</div>
            </div>
        );
    }
}

export {RestaurantName};
