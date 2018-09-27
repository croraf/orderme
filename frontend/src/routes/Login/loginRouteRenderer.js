import {LoginContainer} from './LoginContainer';
import {LoggingIn} from './LoggingIn';
import {store} from '../../modules/store';
import {push} from 'connected-react-router';

const fetchJwtToken = async (facebookAuthCode) => {
    console.log('fetching JWT token for received facebook code');
    const url = 'http://localhost:3000/v0/auth?code=' + facebookAuthCode;
    const options = {
        headers: {
            'Accept': 'application/json'
        }
    };
    const responseJson = await ((await fetch(url, options)).json());
    console.log('JWT token received:', responseJson);
    store.dispatch(push('/home'));
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