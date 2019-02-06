import {connect} from 'react-redux';
import {FoodItem} from './FoodItem';


const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
    removeItemHandler: (restaurantId, foodItemName) => {dispatch({type: 'removeFoodItemFromCart', restaurantId, foodItemName});},
    incrementItemHandler: (restaurantId, foodItemName) => {dispatch({type: 'incrementFoodItemInCart', restaurantId, foodItemName});},
    decrementItemHandler: (restaurantId, foodItemName) => {dispatch({type: 'decrementFoodItemInCart', restaurantId, foodItemName});},
});

const FoodItemContainer = connect(mapStateToProps, mapDispatchToProps)(FoodItem);

export {FoodItemContainer};
