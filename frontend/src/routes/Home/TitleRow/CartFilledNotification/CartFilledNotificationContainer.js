import {connect} from 'react-redux';
import {CartFilledNotification} from './CartFilledNotification';

const mapStateToProps = (state) => {

    let count = 0;

    if (state.cart.foodItems === undefined) {return {count};}

    const arrayOfFoodItems = Object.values(state.cart.foodItems);
    
    arrayOfFoodItems.forEach(foodItem => {
        count += foodItem.quantity;
    });
    
    return {
        count
    };
};

const mapDispatchToProps = (dispatch) => ({
});

const CartFilledNotificationContainer = connect(mapStateToProps, mapDispatchToProps)(CartFilledNotification);

export {CartFilledNotificationContainer};