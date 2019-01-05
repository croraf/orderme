import {store} from './store';

let websocket;

const initializeWebsocket = () => {
    websocket = new WebSocket('ws://localhost:10000');

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