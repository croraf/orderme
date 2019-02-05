import {connect} from 'react-redux';
import {FoodItem} from './FoodItem';


const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
    removeItemHandler: (restaurantId, foodItemName) => {dispatch({type: 'removeItemFromCart', restaurantId, foodItemName});}
});

const FoodItemContainer = connect(mapStateToProps, mapDispatchToProps)(FoodItem);

export {FoodItemContainer};
