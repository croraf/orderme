import {store} from './store';
import config from 'Config';
let websocket;

const initializeWebsocket = () => {
    websocket = new WebSocket(config.wsHost);

    websocket.onopen = () => {
        console.log('opened');
        websocket.send(JSON.stringify({type: 'hello', message: localStorage.getItem('token')}));
    };
    
    websocket.onmessage = (ev) => {
        const data = JSON.parse(ev.data);

        switch (data.type) {
            case 'hello':
                console.log('hello websocket:', data.message);
                break;
            case 'orderStatusChange':
                console.log('orderStatusChange:', data.message);
                store.dispatch({type: 'modifyOrder',  _id: data.message._id, data: data.message});
                break;
            default:
                break;
        }
    
    };
};

export {initializeWebsocket};