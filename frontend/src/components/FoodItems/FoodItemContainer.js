import {connect} from 'react-redux';
import {FoodItem} from './FoodItem';


const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
    removeItemHandler: (foodItemName) => {dispatch({type: 'removeFoodItemFromCart', foodItemName});},
    incrementItemHandler: (foodItemName) => {dispatch({type: 'incrementFoodItemInCart', foodItemName});},
    decrementItemHandler: (foodItemName) => {dispatch({type: 'decrementFoodItemInCart', foodItemName});},
});

const FoodItemContainer = connect(mapStateToProps, mapDispatchToProps)(FoodItem);

export {FoodItemContainer};
