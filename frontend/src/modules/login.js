import jwtDecode from 'jwt-decode';
import websocket from './websocket';


let loginPopupChildWindowObjectReference;


const postLogin = (dispatch, jwtToken) => {
    websocket.sendAuthenticationMesssage(jwtToken);
    const tokenPayload = jwtDecode(jwtToken);
    console.log('[login] decoded token:', tokenPayload);
    dispatch({type: 'login', token: jwtToken, name: tokenPayload.name});
};

const loginPopupWindowMessageHandler = (dispatch) => (event) => {
    console.log('[login] message event received:', event);
    const messageSource = event.data.source;
    if (messageSource === 'login-popup') {
        const jwtToken = event.data.payload;
        console.log('[login] login-popup sent jwt-token:', jwtToken);
        // Persist token
        localStorage.setItem('token', jwtToken);
        postLogin(dispatch, jwtToken);
    }
};

const loginButtonHandler = () => async (dispatch, getState) => {

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
