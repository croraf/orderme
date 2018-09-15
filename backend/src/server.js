const Koa = require('koa');
const Router = require('koa-router');
const koaSwagger = require('koa2-swagger-ui');
const koaBody = require('koa-body');

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

    server.use(createSwaggerMiddleware());

    server.use(koaBody());

    const router = new Router();
    defineRoutes(router);

    server
        .use(router.routes());//.use(router.allowedMethods());


    /* server.use(async ctx => {
        ctx.body = 'Hello World';
    }); */

    server.listen(port);
};

module.exports = { startServer };
