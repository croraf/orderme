import React from 'react';

class LoginButton extends React.Component {


    render() {

        return (
            <button 
                style={{
                    cursor: 'pointer'
                }}
                onClick={this.props.onClick}
            >
                Login with Facebook
            </button>
        );
    }
}

export { LoginButton };
