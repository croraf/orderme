const WebSocket = require('ws');
const jwt = require('jsonwebtoken');


let wss;

const authorizedWebsockets = {};

const initializeWss = async () => {
    wss = new WebSocket.Server({
        port: 10000,
        /* perMessageDeflate: {
            zlibDeflateOptions: {
            // See zlib defaults.
            chunkSize: 1024,
            memLevel: 7,
            level: 3
            },
            zlibInflateOptions: {
            chunkSize: 10 * 1024
            },
            // Other options settable:
            clientNoContextTakeover: true, // Defaults to negotiated value.
            serverNoContextTakeover: true, // Defaults to negotiated value.
            serverMaxWindowBits: 10, // Defaults to negotiated value.
            // Below options specified as default values.
            concurrencyLimit: 10, // Limits zlib concurrency for perf.
            threshold: 1024 // Size (in bytes) below which messages
            // should not be compressed.
        } */
    });

    wss.on('connection', (ws) => {
        ws.on('message', (dataString) => {
            const data = JSON.parse(dataString);

            console.log('received:', data);

            if(data.type === 'hello') {
                const credentials = jwt.verify(data.message, 'abcdef');
                console.log(credentials);

                authorizedWebsockets[credentials.id] = ws;

                /* setTimeout(() => {
                    sendMessage(credentials.id, credentials);
                }, 3000); */
            }
        });
        
        
    });
};

const sendMessage = (userId, data) => {
    authorizedWebsockets[userId].send(JSON.stringify(data));
};

module.exports = {initializeWss, sendMessage};
