import {store} from './store';
import config from 'Config';

let websocket;

const initialize = () => {
    websocket = new WebSocket(config.wsHost);

    websocket.onopen = () => {
        console.log('[WS] websocket connection opened (still not authenticated)');
        const storedJwt = localStorage.getItem('token');
        if (storedJwt) {sendAuthenticationMesssage(storedJwt);}
    };
    
    websocket.onmessage = (ev) => {
        const data = JSON.parse(ev.data);

        switch (data.type) {
            case 'hello':
                console.log('[WS] hello response:', data.message);
                break;
            case 'orderStatusChange':
                console.log('[WS] orderStatusChange received:', data.message);
                store.dispatch({type: 'modifyOrder',  _id: data.message._id, data: data.message});
                break;
            default:
                break;
        }
    
    };
};

const sendAuthenticationMesssage = (jwtToken) => {
    console.log('[WS] sending authentication request with jwt:', jwtToken);
    websocket.send(JSON.stringify({type: 'hello', message: jwtToken}));
};

export default {initialize, sendAuthenticationMesssage};