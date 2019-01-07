import jwtDecode from 'jwt-decode';
import websocket from './websocket';

const loginButtonHandler = () => async (dispatch, getState) => {

    if(window.loginPopupChildWindowObjectReference == null || window.loginPopupChildWindowObjectReference.closed) {
        window.loginPopupChildWindowObjectReference = window.open(
            '/login', 
            'loginPopupWindow',
            'height=700,width=700,modal=yes,alwaysRaised=yes,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,directories=no,status=no'
        );
    } else {
        window.loginPopupChildWindowObjectReference.focus();
    }


    window.loginPopupChildWindowMessageHandler = (jwtToken) => {
        console.log('Auth token received:', jwtToken);
        websocket.sendAuthenticationMesssage(jwtToken);
        const tokenPayload = jwtDecode(jwtToken);
        console.log('tokenPayload:', tokenPayload);
        dispatch({type: 'login', token: jwtToken, name: tokenPayload.name});
    };
};

const loginReducer = (state = {token: undefined, name: undefined}, action) => {
    switch (action.type) {
        case 'logout':
            localStorage.removeItem('token');
            localStorage.removeItem('name');
            return {token: undefined, name: undefined};
        case 'login':
            localStorage.setItem('token', action.token);
            return {token: action.token, name: action.name};
        default:
            return state;
    }
};

export { loginReducer, loginButtonHandler };
