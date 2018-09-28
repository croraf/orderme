import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {TitleRow} from './TitleRow';

const mapStateToProps = (state) => {

    return ({
        /* missedGuesses: state.guesses.missedGuesses,
        countOfMissed: state.guesses.missedGuesses.length */
    });
};

const mapDispatchToProps = (dispatch) => ({
    onLogoutHandler: () => {
        localStorage.removeItem('auth_token');
        dispatch(push('/'));
    }
});



const TitleRowContainer = connect(mapStateToProps, mapDispatchToProps)(TitleRow);

export {TitleRowContainer};
