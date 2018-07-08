
import {connect} from 'react-redux';
import {OutputComponent} from './OutputComponent';

const mapStateToProps = (state) => {
    return ({
        solution: state.solution.currentPath
    });
};

const OutputContainer = connect(mapStateToProps)(OutputComponent);

export {OutputContainer};
