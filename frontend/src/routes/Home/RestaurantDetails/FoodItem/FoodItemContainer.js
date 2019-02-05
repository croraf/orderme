import {connect} from 'react-redux';

import {FoodItem} from './FoodItem';


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addItem: (restaurantId, foodItem) => {
        dispatch({type: 'addFoodItemToCart', restaurantId, foodItem});
    }
});

const FoodItemContainer = connect(mapStateToProps, mapDispatchToProps)(FoodItem);

export {FoodItemContainer};
