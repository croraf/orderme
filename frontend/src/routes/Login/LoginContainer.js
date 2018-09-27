import { connect } from 'react-redux';
import { Login } from './Login';
import { push } from 'connected-react-router';


const redirectToFacebookLoginPage = (loginData) => (dispatch) => {

    console.log('loginData:', loginData);

    const appId = '307207183167195';
    const redirectURI = 'http://localhost:9002';
    const state = '1234';
    const oAuthFacebookLoginPage = 
        'https://www.facebook.com/v3.1/dialog/oauth?' + 
        `client_id=${appId}&redirect_uri=${redirectURI}&state=${state}`;

    //dispatch(push(oAuthFacebookLoginPage));
    window.location.href = oAuthFacebookLoginPage;
};

// facebookAuthCode is null on plain /login endpoint,
// on FB return redirect after FB login it has the string value of the auth code
const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch, props) => ({
    loginWithFacebookButtonHandler: () => {dispatch(redirectToFacebookLoginPage());}
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export { LoginContainer };
