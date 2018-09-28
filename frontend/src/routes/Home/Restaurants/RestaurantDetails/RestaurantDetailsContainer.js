import {connect} from 'react-redux';

import {RestaurantDetails} from './RestaurantDetails';

/* import {fetchNewWordAndDispatchNewWordAction} from '../../modules/guesses'; */

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    /* newGuessHandler: (event) => {dispatch({type: 'newGuess', guess: event.key.toUpperCase()});},
    fetchNewWordAndDispatchNewWordAction: () => {dispatch(fetchNewWordAndDispatchNewWordAction());} */
});

const RestaurantDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantDetails);

export {RestaurantDetailsContainer};