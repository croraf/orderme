import React from 'react';
import Button from 'material-ui/Button';

class CalculateButton extends React.Component {
    
    render() {
        return (
            <div style={{display: 'flex', flexAlign: 'row', justifyContent: 'center', marginTop: '20px'}}>
                <Button 
                    raised={true}
                    color="primary" 
                    onClick={()=>{this.props.calculateHandler(this.props.map);}}
                    disabled={this.props.solvingState === 'solving'}
                >
                    Calculate
                </Button>
            </div>
        );
    }
}



export {CalculateButton};
