import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

class FoodItem extends React.Component {
    render () {
        const {foodItem, editable} = this.props;

        const closeButton = editable && (
            <div style={{cursor: 'pointer'}}>
                <CloseIcon />
            </div>
        );

        return (
            <li style={{
                borderBottom: '1px solid black',
                marginTop: '10px',
                paddingBottom: '5px'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%'
                }}>
                    <div>{foodItem}</div>
                    {closeButton}
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%'
                }}>
                    <div style={{
                        display: 'flex'
                    }}>
                        {editable && <div style={{cursor: 'pointer'}}>-</div>}
                        <div style={{paddingLeft: '10px', paddingRight: '10px'}}>2</div>
                        {editable && <div style={{cursor: 'pointer'}}>+</div>}
                    </div>
                    
                    50,00kn
                    
                </div>
            </li>
        );
    }
}

export {FoodItem};