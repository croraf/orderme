import React from 'react';

import Button from '@material-ui/core/Button';

class FilterSwitch extends React.Component {

    render() {

        return (
            <Button 
                style={{
                    width: '120px',
                    textAlign: 'center',
                    backgroundColor: this.props.openOnly ? 'white' : undefined,
                    border:  this.props.openOnly ? '1px solid black' : undefined,
                    padding: '0px'
                }}
                onClick={this.props.openOnlyToggleHandler}
            >
                Open only
            </Button>
        );
    }
}

export {FilterSwitch};
