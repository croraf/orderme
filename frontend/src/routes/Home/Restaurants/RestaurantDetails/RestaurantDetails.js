import React from 'react';


class RestaurantDetails extends React.Component {

    render() {
        const {restaurantName, restaurantDetails} = this.props;

        return (
            <div style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{
                    fontSize: '30px'
                }}>{restaurantName}</div>
                <div>
                    {restaurantDetails.area},      {restaurantDetails.open ? 'OPEN' : 'CLOSED'}
                </div>
                <div>
                    food1
                </div>
                <div>
                    food2
                </div>
                <div>
                    food3
                </div>
            </div>
            
        );
    }
}

export {RestaurantDetails};
