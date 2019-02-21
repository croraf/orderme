import {store} from './store';
import config from 'Config';

let websocket;

const initialize = () => new Promise((resolve, reject) => {
    websocket = new WebSocket(config.wsHost);

    websocket.onopen = () => {
        console.log('[WS] websocket connection opened (still not authenticated)');
        resolve();
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

                if (store.getState().cart._id === data.message._id) {
                    // Order that has been updated on backend is the one in our cart.
                    // Therefore update it in the cart.
                    store.dispatch({type: 'modifyCartMetadata',  metadata: data.message});
                }
                break;
            default:
                break;
        }
    };
});

const sendAuthenticationMesssage = (jwtToken) => {
    console.log('[WS] sending authentication request with jwt:', jwtToken);
    websocket.send(JSON.stringify({type: 'hello', message: jwtToken}));
};

export default {initialize, sendAuthenticationMesssage};