import React from 'react';

import {LoginButton} from './LoginButton';

class Login extends React.Component {


    render() {

        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: '200px'
            }}>
                <LoginButton onClick={this.props.loginWithFacebookButtonHandler}/>
            </div>
        );
    }
}

export { Login };
