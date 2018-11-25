

import React from 'react';
import { CartModalItemContainer } from './CartModalItem/CartModalItemContainer';

class CartModalContent extends React.Component {

    render() {
        const { cartRestaurantIds } = this.props;
        const numberOfCartItems = cartRestaurantIds.length;


        return (
            <div style={{
                minWidth: '500px',
                borderTop: '5px solid black',
                borderBottom: '5px solid black',
                minHeight: '50px',
                padding: '10px 0px',
                margin: '0px 0px 10px 0px'
            }}>
                {cartRestaurantIds.reverse().map((restaurantId, i) =>
                    <CartModalItemContainer 
                        key={restaurantId}
                        isLastChild={i === numberOfCartItems - 1}
                        restaurantId={restaurantId}
                    />
                )}
            </div>
        );
    }
}

export { CartModalContent };