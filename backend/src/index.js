const { initializeDatabase, shutdownDatabase } = require('./dal/db');

const {startServer} = require('./server/server');

const {initializeWss} = require('./ws');

const main = async () => {

    await initializeDatabase();
    console.log('- Database interface initialized');

    await startServer(process.env.PORT || 3000);
    console.log('- Koa server started on port 3000');

    /* await initializeWss();
    console.log('- WS server started on port 10000'); */
};


main();
