import { connect } from 'react-redux';
import { Login } from './Login';
import config from 'Config';


const redirectToFacebookLoginPage = () => (dispatch) => {

    const appId = '307207183167195';
    const redirectURI = config.auth.facebookRedirectUri;
    const state = '1234';
    const oAuthFacebookLoginPage = 
        'https://www.facebook.com/v3.1/dialog/oauth?' + `client_id=${appId}&redirect_uri=${redirectURI}&state=${state}`;

    window.location.href = oAuthFacebookLoginPage;
};

const redirectToGoogleLoginPage = () => (dispatch) => {

    const appId = '433081490629-vj1ftnovtj6pmacnildqa43fe44m1d2m.apps.googleusercontent.com';
    const redirectURI = config.auth.googleRedirectUri;
    const response_type = 'token';
    const scope = 'email';
    const state = '1234';
    const oAuthGoogleLoginPage = 
        'https://accounts.google.com/o/oauth2/v2/auth?' + `client_id=${appId}&redirect_uri=${redirectURI}&response_type=${response_type}&scope=${scope}&state=${state}`;

    window.location.href = oAuthGoogleLoginPage;
};

// facebookAuthCode is null on plain /login endpoint,
// on FB return redirect after FB login it has the string value of the auth code
const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch, props) => ({
    loginWithFacebookButtonHandler: () => {dispatch(redirectToFacebookLoginPage());},
    loginWithGoogleButtonHandler: () => {dispatch(redirectToGoogleLoginPage());}
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export { LoginContainer };
