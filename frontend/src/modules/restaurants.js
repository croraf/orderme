import fetchUtils from 'Utilities/fetchUtils';


const loadRouteData = () => async (dispatch) => {

    const restaurants = await fetchUtils.fetchRelative('restaurants');
    console.log('restaurants fetched:', restaurants);
    dispatch({type: 'restaurantsData', data: restaurants});
};

const restaurantsReducer = (state = [], action) => {
    switch (action.type) {
        case 'restaurantsData':
            return action.data;
        default:
            return state;
    }
};

export { restaurantsReducer, loadRouteData };
