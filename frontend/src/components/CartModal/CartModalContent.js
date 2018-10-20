

import React from 'react';
import { CartModalItemContainer } from './CartModalItem/CartModalItemContainer';
/* import DialogContentText from '@material-ui/core/DialogContentText'; */

class CartModalContent extends React.Component {

    render() {

        const { cartRestaurantIds } = this.props;
        const numberOfItems = cartRestaurantIds.length;

        return (
            <div style={{
                minWidth: '500px',
                borderTop: '1px solid black',
                borderBottom: '1px solid black',
                minHeight: '100px'
            }}>
                {cartRestaurantIds.map((restaurantId, i) => (
                    <CartModalItemContainer 
                        key={restaurantId}
                        isLastChild={i === numberOfItems - 1}
                        restaurantId={restaurantId}
                    />
                ))}
            </div>

        );
    }
}

export { CartModalContent };