import {connect} from 'react-redux';
import {CartFilledNotification} from './CartFilledNotification';

const mapStateToProps = (state) => {

    let count = 0;
    const arrayOfRestaurantsWithItems = Object.values(state.cart);
    
    arrayOfRestaurantsWithItems.forEach(items => {
        items.forEach(() => {
            count++;
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