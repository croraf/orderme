const Koa = require('koa');
const koaSwagger = require('koa2-swagger-ui');
const koaBody = require('koa-body');
const jwt = require('jsonwebtoken');
const cors = require('koa-cors');
const send = require('koa-send');
const path = require('path');
const swagger2 = require('swagger2');
const { validate } = require('swagger2-koa');

const {bindRoutes} = require('./api/routes');

const apiSpec = require('./api/swaggerSpec');

const createSwaggerMiddleware = () => {

    return koaSwagger({
        routePrefix: '/swagger', // host at /swagger instead of default /docs
        swaggerOptions: {
            spec: apiSpec // path to api specification
        },
    });
};

const jwtDecodeMiddleware = async (ctx, next) => {
    if (ctx.request.headers && ctx.request.headers['x-access-token']){
        const token = ctx.request.header['x-access-token'];
        ctx.user = jwt.verify(token, 'abcdef');
    }
    await next();
};

const startServer = (port) => {

    const server = new Koa();

    server.use(cors({ origin: '*', allowMethods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'] }));

    server.use(createSwaggerMiddleware());

    server.use(koaBody());

    server.use(async (ctx, next) => {
        console.log('-------request arrived:', ctx.request.method + ' ' + ctx.request.url);
        await next();
    });

    if (!swagger2.validateDocument(apiSpec)) {
        throw Error('Swagger object does not conform to the Swagger 2.0 schema');
    }
    server.use(validate(apiSpec));

    server.use(jwtDecodeMiddleware);
    
    server.use(bindRoutes());

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
