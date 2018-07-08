import {connect} from 'react-redux';

import {Restaurants} from './Restaurants';

const restaurantsList = [
    {
        name: 'rest1',
        open: true,
        area: 'Centar'
    },
    {
        name: 'burg2',
        open: true,
        area: 'Tresnjevka'
    },
    {
        name: 'rest2',
        open: false,
        area: 'Trnje'
    },
    {
        name: 'abc',
        open: true,
        area: 'Centar'
    }, 
    {
        name: 'def',
        open: true,
        area: 'Centar'
    }, 
    {
        name: 'burg3',
        open: true,
        area: 'Centar'
    }, 
    {
        name: 'burg4',
        open: false,
        area: 'Centar'
    }
]

const mapStateToProps = (state) => {

    return ({
        listOfRestaurants: restaurantsList,
        openOnly: state.filters.openOnly,
        area: state.filters.area
    });

};



const RestaurantsContainer = connect(mapStateToProps, undefined)(Restaurants);

export {RestaurantsContainer};
