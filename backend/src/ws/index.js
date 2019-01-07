const WebSocket = require('ws');
const jwt = require('jsonwebtoken');


let wss;

const authorizedWebsockets = {};

const configureWss = async (server) => {
    wss = new WebSocket.Server({
        server: server,
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
        console.log('[WSS] new connection received');
        ws.on('message', (dataString) => {
            const data = JSON.parse(dataString);

            console.log('[WSS] received message on socket');
            console.log('[WSS] type:', data.type);
            console.log('[WSS] message:', data.message);

            if(data.type === 'hello') {
                // When the ws client connects, he should send authorization jwt
                // If the credentials are OK, add the connection to the connections map
                const credentials = jwt.verify(data.message, 'abcdef');
                console.log('[WSS] credentials:', credentials);
                if (!authorizedWebsockets[credentials.id]) {authorizedWebsockets[credentials.id] = [];}
                authorizedWebsockets[credentials.id].push(ws);
                console.log('[WSS] added socket in the list of sockets for connected user');
            }
        });
    });
};

const sendMessage = (userId, data) => {
    authorizedWebsockets[userId].send(JSON.stringify(data));
};

const broadcastMessage = (data) => {
    for (const userId in authorizedWebsockets) {
        authorizedWebsockets[userId].send(JSON.stringify(data));
    }
};

module.exports = {configureWss, sendMessage, broadcastMessage};
