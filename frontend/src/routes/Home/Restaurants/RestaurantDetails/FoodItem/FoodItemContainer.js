import {connect} from 'react-redux';

import {FoodItem} from './FoodItem';


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addItem: (restaurantId, item) => {dispatch({type: 'addItemToCart', data: [restaurantId,  item]});}
});

const FoodItemContainer = connect(mapStateToProps, mapDispatchToProps)(FoodItem);

export {FoodItemContainer};
