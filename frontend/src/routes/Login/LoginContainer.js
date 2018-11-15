import { connect } from 'react-redux';
import { Login } from './Login';
import config from 'Config';


const redirectToFacebookLoginPage = () => (dispatch) => {

    const appId = '307207183167195';
    const redirectURI = config.auth.facebookRedirectUri;
    const state = '1234';
    const oAuthFacebookLoginPage = new URL('https://www.facebook.com/v3.1/dialog/oauth');

    oAuthFacebookLoginPage.searchParams.set('client_id', appId);
    oAuthFacebookLoginPage.searchParams.set('redirect_uri', redirectURI);
    oAuthFacebookLoginPage.searchParams.set('state', state);
    
    window.location.href = oAuthFacebookLoginPage;
};

const redirectToGoogleLoginPage = () => (dispatch) => {

    const appId = '433081490629-vj1ftnovtj6pmacnildqa43fe44m1d2m.apps.googleusercontent.com';
    const redirectURI = config.auth.googleRedirectUri;
    const response_type = 'id_token';
    const scope = 'email profile openid';
    const state = '1234';
    const oAuthGoogleLoginPage = new URL('https://accounts.google.com/o/oauth2/auth');

    oAuthGoogleLoginPage.searchParams.set('client_id', appId);
    oAuthGoogleLoginPage.searchParams.set('redirect_uri', redirectURI);
    oAuthGoogleLoginPage.searchParams.set('response_type', response_type);
    oAuthGoogleLoginPage.searchParams.set('scope', scope);
    oAuthGoogleLoginPage.searchParams.set('state', state);

    window.location.href = oAuthGoogleLoginPage;
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch, props) => ({
    loginWithFacebookButtonHandler: () => {dispatch(redirectToFacebookLoginPage());},
    loginWithGoogleButtonHandler: () => {dispatch(redirectToGoogleLoginPage());}
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export { LoginContainer };

