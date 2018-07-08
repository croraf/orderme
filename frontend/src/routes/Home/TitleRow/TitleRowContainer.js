import {connect} from 'react-redux';

import {TitleRow} from './TitleRow';

const mapStateToProps = (state) => {

    return ({
        /* missedGuesses: state.guesses.missedGuesses,
        countOfMissed: state.guesses.missedGuesses.length */
    });

};



const TitleRowContainer = connect(mapStateToProps, undefined)(TitleRow);

export {TitleRowContainer};
