
import {connect} from 'react-redux';
import {MapTextArea} from './MapTextArea';

const mapStateToProps = (state) => {
    return ({
        locationOnMap: state.solution.location,
        map: state.map,
        solvingState: state.solvingState
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        handleChange: (event) => {
            dispatch({type: 'clearLocation'});
            dispatch({type: 'updateMap', map: event.target.value});
        }
    });
};

const MapTextAreaContainer = connect(mapStateToProps, mapDispatchToProps)(MapTextArea);

export {MapTextAreaContainer};