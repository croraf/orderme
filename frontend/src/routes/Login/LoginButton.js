import React from 'react';

class LoginButton extends React.Component {


    render() {
        const {backgroundColor, color, onClick, text} = this.props;

        return (
            <button 
                style={{
                    cursor: 'pointer',
                    backgroundColor: backgroundColor,
                    borderRadius: '5px',
                    borderColor: 'rgb(53, 120, 229)',
                    color: color,
                    fontFamily: 'Helvetica',
                    fontSize: '18px',
                    fontWeight: '700',
                    height: '50px',
                    width: '300px',
                    borderStyle: 'none',
                    marginTop: '30px'
                }}
                onClick={onClick}
            >
                {text}
            </button>
        );
    }
}

export { LoginButton };
