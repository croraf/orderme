const Koa = require('koa');

const koaBody = require('koa-body');
const cors = require('koa-cors');
const {createSwaggerUiMiddleware, createSwaggerValidateMiddleware, jwtDecodeMiddleware, staticMiddleware, loggingMiddleware} = require('./middlewares');
const {bindRoutes} = require('../api/routes');

const startServer = (port) => {

    const server = new Koa();

    server.use(cors({ origin: '*', allowMethods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'] }));

    server.use(createSwaggerUiMiddleware());

    server.use(koaBody());

    server.use(loggingMiddleware);

    server.use(createSwaggerValidateMiddleware());

    server.use(jwtDecodeMiddleware);
    
    server.use(bindRoutes());

    server.use(staticMiddleware);
    
    server.listen(port);
};

module.exports = { startServer };
