import {connect} from 'react-redux';
import {CartFilledNotification} from './CartFilledNotification';

const mapStateToProps = (state) => {

    let count = 0;
    const arrayOfRestaurantsWithItems = Object.values(state.cart);
    
    arrayOfRestaurantsWithItems.forEach(restaurantItem => {
        Object.values(restaurantItem).forEach(foodItem => {
            count += foodItem.quantity;
        });
    });
    
    return {
        count
    };
};

const mapDispatchToProps = (dispatch) => ({
});

const CartFilledNotificationContainer = connect(mapStateToProps, mapDispatchToProps)(CartFilledNotification);

export {CartFilledNotificationContainer};