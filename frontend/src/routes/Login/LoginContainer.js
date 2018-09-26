import { connect } from 'react-redux';
import { Login } from './Login';
import { push } from 'connected-react-router';


export const redirectToFacebookLoginPage = (loginData) => (dispatch) => {

    console.log('loginData:', loginData);

    const appId = '307207183167195';
    const redirectURI = 'http://localhost:3000/v0/auth';
    const state = '1234';
    const oAuthFacebookLoginPage = 
        'https://www.facebook.com/v3.1/dialog/oauth?' + 
        `client_id=${appId}&redirect_uri=${redirectURI}&state=${state}&response_type=code`;

    //dispatch(push(oAuthFacebookLoginPage));
    window.location.href = oAuthFacebookLoginPage;
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    loginWithFacebookButtonHandler: () => {dispatch(redirectToFacebookLoginPage());}
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export { LoginContainer };
