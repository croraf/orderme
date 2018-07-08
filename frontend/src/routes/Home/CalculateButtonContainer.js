
import {connect} from 'react-redux';
import {CalculateButton} from './CalculateButton';

import {calculatePath} from '../../modules/calculatePath';

const mapStateToProps = (state) => {
    return ({
        map: state.map,
        solvingState: state.solvingState
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        calculateHandler: (value) => {
            dispatch({type: 'solvingStarted'});
            calculatePath(value);
        }
    });
};

const CalculateButtonContainer = connect(mapStateToProps, mapDispatchToProps)(CalculateButton);

export {CalculateButtonContainer};