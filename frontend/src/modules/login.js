import jwtDecode from 'jwt-decode';
import websocket from './websocket';


let loginPopupChildWindowObjectReference;


const postLogin = (dispatch, jwtToken) => {
    websocket.sendAuthenticationMesssage(jwtToken);
    const tokenPayload = jwtDecode(jwtToken);
    console.log('[login] decoded token:', tokenPayload);
    dispatch({type: 'login', token: jwtToken, name: tokenPayload.name});
};


/**
 * Called from child window when login is completed with jwt-token generated from "orderMe".
 * Dispatch is provided so that needed redux actions can be called after login success.
 * TODO: Possibly grab store in a different way (directly).
*/
const loginPopupChildWindowMessageHandler = (dispatch) => (jwtToken) => {
    console.log('[login] Child window sent message. jwt-token received:', jwtToken);
    // Persist token
    localStorage.setItem('token', jwtToken);
    postLogin(dispatch, jwtToken);
};

const loginPopupWindowMessageHandler = (dispatch) => (event) => {
    const jwtToken = event.data;
    console.log('[login] Child window sent message. jwt-token received:', jwtToken);
    // Persist token
    localStorage.setItem('token', jwtToken);
    postLogin(dispatch, jwtToken);
};

const loginButtonHandler = () => async (dispatch, getState) => {

    // Store handler of child-window's messages on parent window object
    // as child windows can access it. (Seems it is not working though in mobile Chrome) 
    /* window.loginPopupChildWindowMessageHandler = loginPopupChildWindowMessageHandler(dispatch); */

    // Add listener that will listen for loginPopupWindow messages.
    window.addEventListener('message', loginPopupWindowMessageHandler(dispatch), false);

    // Close child window if parent closes
    window.onunload = () => {
        if(loginPopupChildWindowObjectReference && !loginPopupChildWindowObjectReference.closed) {
            loginPopupChildWindowObjectReference.close();
        }
    };

    // Open a child window responsible for OAuth2 login and store it in module-local variable.
    // If it is already open and stored before just give it a focus. 
    if(!loginPopupChildWindowObjectReference || loginPopupChildWindowObjectReference.closed) {
        loginPopupChildWindowObjectReference = window.open(
            '/login', 
            'loginPopupWindow',
            'height=700,width=700,modal=yes,alwaysRaised=yes,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,directories=no,status=no'
        );
    } else {
        loginPopupChildWindowObjectReference.focus();
    }
};

const loginReducer = (state = {token: undefined, name: undefined}, action) => {
    switch (action.type) {
        case 'logout':
            localStorage.removeItem('token');
            localStorage.removeItem('name');
            return {token: undefined, name: undefined};
        case 'login':

            return {token: action.token, name: action.name};
        default:
            return state;
    }
};

export { loginReducer, loginButtonHandler };
