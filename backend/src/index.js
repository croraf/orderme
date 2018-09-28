const { initializeDatabase, shutdownDatabase } = require('./dal/db');

const {startServer} = require('./server');

const main = async () => {

    await initializeDatabase();
    console.log('- Database interface initialized');

    await startServer(3000);
    console.log('- Koa server started on port 3000');

    
};


main();
