const Koa = require('koa');
const Router = require('koa-router');
const koaSwagger = require('koa2-swagger-ui');
const koaBody = require('koa-body');
const cors = require('koa-cors');
const koaStatic = require('koa-static');
const send = require('koa-send');
const path = require('path');

const {defineRoutes} = require('./api/routes');

const createSwaggerMiddleware = () => {

    return koaSwagger({
        routePrefix: '/swagger', // host at /swagger instead of default /docs
        swaggerOptions: {
            spec: require('./api/swaggerSpec') // path to api specification
        },
    });
};

const startServer = (port) => {

    const server = new Koa();

    server.use(cors({ origin: '*', allowMethods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'] }));

    server.use(createSwaggerMiddleware());

    server.use(koaBody());

    const router = new Router();
    defineRoutes(router);

    server
        .use(router.routes());

    /* server.use(koaStatic(path.resolve('../frontend/dist'))); */

    server.use(async (ctx) => {
        await send(ctx, ctx.path, {root: path.resolve('../frontend/dist')});
    });
    
    server.use(async (ctx) => {
        await send(ctx, path.resolve('../frontend/dist/index.html'));
    });
    
    server.listen(port);
};

module.exports = { startServer };
