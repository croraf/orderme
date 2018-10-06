const Koa = require('koa');
const Router = require('koa-router');
const koaSwagger = require('koa2-swagger-ui');
const koaBody = require('koa-body');
const cors = require('koa-cors');
const send = require('koa-send');
const path = require('path');
/* const swagger2koa = require('swagger2-koa'); */

const {defineRoutes} = require('./api/routes');

const apiSpec = require('./api/swaggerSpec');

const createSwaggerMiddleware = () => {

    return koaSwagger({
        routePrefix: '/swagger', // host at /swagger instead of default /docs
        swaggerOptions: {
            spec: apiSpec // path to api specification
        },
    });
};

const startServer = (port) => {

    const server = new Koa();

    server.use(cors({ origin: '*', allowMethods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'] }));

    server.use(createSwaggerMiddleware());

    server.use(koaBody());

    server.use(async (ctx, next) => {
        console.log('request arrived:', ctx);
        await next();
    });

    /* server.use(swagger2koa.validate(apiSpec)); */

    const router = new Router();
    defineRoutes(router);

    server
        .use(router.routes());

    server.use(async (ctx) => {
        try {
            await send(ctx, ctx.path, {
                root: path.resolve('../frontend/dist'),
                index: 'index.html'
            });
        } catch (err) {
            console.log('koa-send path resolution error:', err);
            await send(ctx, 'index.html', {root: path.resolve('../frontend/dist')});
        }
    });
    
    server.listen(port);
};

module.exports = { startServer };
