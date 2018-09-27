import {LoginContainer} from './LoginContainer';
import {LoggingIn} from './LoggingIn';


const fetchJwtToken = async (facebookAuthCode) => {
    console.log('fetching JWT token for received facebook code');
    const response = await fetch('http://localhost:3000/v0/auth?code=' + facebookAuthCode);
    console.log('JWT token received:', response);
};

const loginRouteRenderer = () => {

    const facebookAuthCode = new URLSearchParams(location.search).get('code');

    if (facebookAuthCode) {
        fetchJwtToken(facebookAuthCode);
        return LoggingIn;
    } else {
        return LoginContainer;
    }
};

export {loginRouteRenderer};