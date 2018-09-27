import {LoginContainer} from './LoginContainer';
import {LoggingIn} from './LoggingIn';


const fetchJwtToken = async () => {
    console.log('fetching JWT token for received facebook code');
    const response = await fetch('http://localhost:3000/v0/auth');
    console.log('JWT token received:', response);
};

const loginRouteRenderer = () => {

    const facebookAuthCode = new URLSearchParams(location.search).get('code');

    if (facebookAuthCode) {
        fetchJwtToken();
        return LoggingIn;
    } else {
        return LoginContainer;
    }
};

export {loginRouteRenderer};