const { initializeDatabase, shutdownDatabase } = require('./dal/db');

const {configureKoa} = require('./server/koa');

const {configureWss} = require('./ws');

const http = require('http');

const main = async () => {

    await initializeDatabase();
    console.log('- Database interface initialized');

    const koaConfiguration = await configureKoa();
    console.log('- Koa server configured');
    const server = http.createServer(koaConfiguration.callback());
    await configureWss(server);
    console.log('- WS server configured');
    server.listen(process.env.PORT || 3000);
    console.log('- Server started');
};


main();
