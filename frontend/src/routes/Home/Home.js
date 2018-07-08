import React from 'react';



import {RestaurantsContainer} from './Restaurants/RestaurantsContainer';
import {FilterRowContainer} from './FilterRow/FilterRowContainer';
import {GameOverOverlayContainer} from './GameOverOverlay/GameOverOverlayContainer';
import {TitleRowContainer} from './TitleRow/TitleRowContainer';

/* import squareImage from './square.png'; */


class Home extends React.Component {

    componentDidMount() {
        
        /* console.log('Home component mounted');
        const body = document.getElementsByTagName('body')[0];
        body.addEventListener('keypress', this.props.newGuessHandler);

        this.props.fetchNewWordAndDispatchNewWordAction(); */

    }
    
    render() {
        
        return (
            <div style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                minWidth: '1200px'
            }}>
                <div>commercial left</div>
                <div style={{
                    position: 'relative',
                    minWidth: '800px',
                    maxWidth: '800px',
                    backgroundColor: '#f5f5f5',
                    /* backgroundImage: `url(${squareImage})`,
                    backgroundPosition: 'bottom right',
                    backgroundRepeat: 'no-repeat', */
                    margin: '0px 200px 0px 200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>

                    <TitleRowContainer />

                    <FilterRowContainer />

                    <RestaurantsContainer />

                    
                    {/* <GameOverOverlayContainer /> */}
                    
                </div>
                <div>commercial right</div>
            </div>
            
        );
    }
}

export { Home };
