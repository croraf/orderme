
/**
 * The only module that manages all game actions and state. 
 * If the application gets bigger the file will be broken acording to application's domains.
 */


// static examples
// const lettersRowText = [undefined, undefined, undefined, undefined, 'H', 'A', '', '', '', 'A', ''];
// const missedGuesses = ['B', 'D', 'E', 'Z', 'P', 'U', 'K', 'L', 'Q', 'W' /* */];


/**
 * Game state constants
 */
/* const GAME_STATE_OVER = 'GAME_STATE_OVER';
const GAME_STATE_ON = 'GAME_STATE_ON';
const GAME_STATE_INITIALIZING = 'GAME_STATE_INITIALIZING';


import winSound from './win1.wav';
const winAudioPlayer = new Audio(winSound);
winAudioPlayer.volume = 0.07;

import loseSound from './lose1.wav';
const loseAudioPlayer = new Audio(loseSound);
loseAudioPlayer.volume = 0.07; */

/**
 * Async action creator. Dispatch start of fetching for new word. Fetches, and on success dispatches start new game action.
 */
/* const fetchNewWordAndDispatchNewWordAction = () => dispatch  => {

    dispatch({type: 'newWordFetching'});

    return (
        
        fetch(
            'http://api.wordnik.com:80/v4/words.json/randomWords?' + 
            'hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&' +
            'minLength=5&maxLength=11&limit=1' + 
            '&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
        )
            .then(response => response.json())
            .then(randomWords => {
        
                dispatch({type: 'newWordReceived', newWord: randomWords[0].word.toUpperCase()});
                
            })
    );
}; */


const filtersReducer = (state = {openOnly: false, area: 'Centar', sortBy: 'Rating'}, action) => {
    switch (action.type) {
        case 'openOnly':
            return {openOnly: !state.openOnly, area: state.area, sortBy: state.sortBy};
        case 'filterArea':
            return {openOnly: state.openOnly, area: action.area, sortBy: state.sortBy};
        case 'filterSortBy':
            return {openOnly: state.openOnly, area: state.area, sortBy: action.sortBy};
        default:
            return state;
    }
};

export { filtersReducer };
