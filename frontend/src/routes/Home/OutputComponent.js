import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class OutputComponent extends React.Component {
    render() {

        let {solution} = this.props;

        if (this.props.filterLetters) {
            solution = solution.replace(/[xX\+\-\|@]/g, '');
        }

        return (
            <div style={{marginTop: '25px'}}>
                <h4 style={{textAlign: 'center'}}>{this.props.label}</h4>

                <div style={{display: 'flex', flexAlign: 'row', justifyContent: 'center', width: '100%', height: '35px', margin: '10px'}}>
                    <Scrollbars  
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '50%',
                            height: '100%',
                            backgroundColor: 'white',
                            border: '1px solid black',
                            borderRadius: '5px',
                            fontSize: '20px',
                            fontFamily: 'monospace',
                            paddingTop: '5px',
                            textAlign: 'center',
                            whiteSpace: 'nowrap'
                        }}
                        className='outputScrollbar'    
                    >
                        {solution}
                    </Scrollbars>
                </div>
            </div>
        );
    }
}

export {OutputComponent};
