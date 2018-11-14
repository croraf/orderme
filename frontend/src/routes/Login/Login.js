import React from 'react';

import {LoginButton} from './LoginButton';

class Login extends React.Component {


    render() {

        return (
            <div style={{
                marginTop: '200px'
            }}>
                <div style={{textAlign: 'center'}}>
                    <LoginButton 
                        onClick={this.props.loginWithFacebookButtonHandler}
                        text='Login with Facebook' 
                        style={{
                            backgroundColor: 'rgb(53, 120, 229)',
                            color: 'white'
                        }}
                    />
                </div>
                <div style={{textAlign: 'center'}}>
                    <LoginButton
                        onClick={this.props.loginWithGoogleButtonHandler}
                        text='Login with Google'
                        style={{
                            backgroundColor: 'white',
                            color: 'black'
                        }}
                    />
                </div>
                
            </div>
        );
    }
}

export { Login };
