
let websocket;

const initializeWebsocket = () => {
    websocket = new WebSocket('ws://localhost:10000');

    websocket.onopen = () => {
        console.log('opened');
        websocket.send(JSON.stringify({type: 'hello', message: localStorage.getItem('token')}));
    };
    
    websocket.onmessage = (ev) => {
        const data = JSON.parse(ev.data);

        console.log(data);

        switch (data.type) {
            case 'hello':
                console.log('hello websocket:', data.message);
                break;
        
            default:
                break;
        }
    
    };
};

export {initializeWebsocket};