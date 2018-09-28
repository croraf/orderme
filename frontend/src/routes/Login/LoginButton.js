import React from 'react';

class LoginButton extends React.Component {


    render() {

        return (
            <button 
                style={{
                    cursor: 'pointer',
                    backgroundColor: 'rgb(53, 120, 229)',
                    borderRadius: '5px',
                    borderColor: 'rgb(53, 120, 229)',
                    color: 'white',
                    fontFamily: 'Helvetica',
                    fontSize: '18px',
                    fontWeight: '700',
                    height: '60px',
                    width: '320px',
                    borderStyle: 'none'
                }}
                onClick={this.props.onClick}
            >
                Login with Facebook
            </button>
        );
    }
}

export { LoginButton };
