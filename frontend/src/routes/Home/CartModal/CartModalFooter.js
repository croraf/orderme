import React from 'react';
import { Button } from '@material-ui/core';


class CartModalFooter extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Button 
                    color='primary'
                    onClick={this.props.onFullOrdersButtonClickHandler}
                >Full orders history</Button>
            </div>
        );
    }
}

export {CartModalFooter};
