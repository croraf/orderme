import React from 'react';

import {NewWord} from './NewWord';

class GameOverOverlay extends React.Component {
    render() {

        const {newWordHandler, gameState} = this.props;

        const GameOverComponent = (
            <div style={{
                position: 'absolute',
                width: '100%', 
                height: '100%',
                borderRadius: '10px',
                backgroundColor: '#3b4163',
                opacity: '0.74',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{
                    fontFamily: 'Aller Display',
                    fontSize: '92px',
                    fontWeight: '400',
                    lineHeight: '41.02px',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    marginTop: '70px'
                }}>
                    GAME OVER
                </div>

                <NewWord newWordHandler={newWordHandler} />
            </div>
        );

        return (
            gameState === 'GAME_STATE_OVER' ? GameOverComponent : <div />
        );
    }
}

export {GameOverOverlay};
