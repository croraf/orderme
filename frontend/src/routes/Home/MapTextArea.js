import React from 'react';

const makeTextHighlight = (x, y) => {

    // console.log(x, y);

    let brArray = [];
    while (y > 0) {
        brArray.push(<br key={y} />);
        y--;
    }

    let nbspArray = [];
    while (x > 0) {
        nbspArray.push(<span key={x}>&nbsp;</span>);
        x--;
    }

    let textHighlight = (
        <div>
            {brArray}
            {nbspArray}
            <span style={{backgroundColor: 'red'}}>&nbsp;</span>
        </div>
    );

    return textHighlight;
};

class MapTextArea extends React.Component {
    render() {

        const {handleChange, map, locationOnMap, solvingState} = this.props;

        const textHighlight = locationOnMap.length > 0 ? makeTextHighlight(locationOnMap[0], locationOnMap[1]) : <div />;

        return (

            <div style={{position: 'relative', display: 'flex', flexAlign: 'row', justifyContent: 'center', width: '100%', height: '300px', margin: '10px'}}>

                <textarea 
                    style={{
                        width: '50%', 
                        height: '100%', 
                        backgroundColor: 'white', 
                        fontSize: '18px', 
                        border: '1px solid black',
                        resize: 'none'
                    }} 
                    value={map}
                    onChange={handleChange}
                    readOnly={solvingState === 'solving'}
                />
                <div
                    style={{
                        position: 'absolute',
                        width: '50%', 
                        height: '100%', 
                        fontSize: '18px',
                        padding: '2px',
                        opacity: 0.5,
                        color: 'red',
                        zIndex: 10,
                        fontFamily: 'monospace',
                        pointerEvents: 'none'
                    }}
                >
                    {textHighlight}
                </div>
            
            </div>
        );
    }
}

export {MapTextArea};
