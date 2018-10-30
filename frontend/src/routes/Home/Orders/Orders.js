import React from 'react';
import { Button } from '@material-ui/core';

class Orders extends React.Component {

    render() {
        const {onReturnToListOfRestaurantsHandler} = this.props;

        return (
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '10px'
                }}>
                    <div style={{
                        fontSize: '30px'
                    }}>Orders:</div>

                    <Button variant='outlined' onClick={onReturnToListOfRestaurantsHandler}>Return to list of restaurants</Button>
                </div>
                
                <div>...TODO...</div>
            </div>
        );
    }
}

export {Orders};
