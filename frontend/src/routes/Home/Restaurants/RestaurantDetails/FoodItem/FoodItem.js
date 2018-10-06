import React from 'react';

class FoodItem extends React.Component {

    render() {
        const {foodItem} = this.props;

        return (
            <div style={{
                display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '10px 0px'
            }}>
                <div key={foodItem.name}>
                    <div style={{
                        fontSize: '20px',
                        padding: '5px 0px'
                    }}>{foodItem.name}: {foodItem.price} kn</div>
                    <div>{foodItem.description}</div>
                </div>
                <button 
                    style={{
                        cursor: 'pointer'
                    }}
                    onClick={() => alert('asd')}
                >
                    Add to cart
                </button>
            </div>
            
        );
    }
}

export {FoodItem};
