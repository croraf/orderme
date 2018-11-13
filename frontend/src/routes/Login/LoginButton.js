import React from 'react';

const defaultStyle = {
    cursor: 'pointer',
    borderRadius: '5px',
    borderColor: 'rgb(53, 120, 229)',
    fontFamily: 'Helvetica',
    fontSize: '18px',
    fontWeight: '700',
    height: '50px',
    width: '300px',
    borderStyle: 'none',
    marginTop: '30px'
};

class LoginButton extends React.Component {


    render() {
        const {style, onClick, text} = this.props;

        const computedStyle = Object.assign({}, defaultStyle, style);

        return (
            <button 
                style={computedStyle}
                onClick={onClick}
            >
                {text}
            </button>
        );
    }
}

export { LoginButton };
