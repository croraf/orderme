import React from 'react';
import { css } from 'react-emotion';
import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class CustomSpinner extends React.Component {

    render() {
        const {color} = this.props;
        
        return (
            <div style={{
                textAlign: 'center',
                paddingTop: '100px'
            }}>
                <ClipLoader
                    className={override}
                    sizeUnit={'px'}
                    size={100}
                    color={color || '#123abc'}
                    loading={true}
                />
            </div>
        );
    }
}

export default CustomSpinner;