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
    
    // TODO: when same food items will be collapsed into one item with multiple quantity this should be revisioned
    return {
        count
    };
};

const mapDispatchToProps = (dispatch) => ({
});

const CartFilledNotificationContainer = connect(mapStateToProps, mapDispatchToProps)(CartFilledNotification);

export {CartFilledNotificationContainer};