import {connect} from 'react-redux';

import {GameOverOverlay} from './GameOverOverlay';

import {fetchNewWordAndDispatchNewWordAction} from '../../../modules/guesses';

const mapStateToProps = (state) => ({
    gameState: state.guesses.gameState
});

const mapDispatchToProps = (dispatch) => ({
    newWordHandler: () => {
        console.log('new word selected');
        dispatch(fetchNewWordAndDispatchNewWordAction());
    }
});

const GameOverOverlayContainer = connect(mapStateToProps, mapDispatchToProps)(GameOverOverlay);

export {GameOverOverlayContainer};
