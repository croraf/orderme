
const jwt = require('jsonwebtoken');
const send = require('koa-send');
const path = require('path');
const swagger2 = require('swagger2');
const { validate } = require('swagger2-koa');

const koaSwagger = require('koa2-swagger-ui');
const apiSpec = require('../apiSpec');


const loggingMiddleware = async (ctx, next) => {
    console.log('-------request arrived:', ctx.request.method + ' ' + ctx.request.url);
    await next();
};

const createSwaggerUiMiddleware = () => {

    return koaSwagger({
        routePrefix: '/swagger', // host at /swagger instead of default /docs
        swaggerOptions: {
            spec: apiSpec // path to api specification
        },
    });
};

const createSwaggerValidateMiddleware = () => {
    if (!swagger2.validateDocument(apiSpec)) {
        throw Error('Swagger object does not conform to the Swagger 2.0 schema');
    }
    return validate(apiSpec);
};

const jwtDecodeMiddleware = async (ctx, next) => {
    if (ctx.request.headers && ctx.request.headers['x-access-token']){
        const token = ctx.request.header['x-access-token'];
        ctx.user = jwt.verify(token, 'abcdef');
    }
    await next();
};

const staticMiddleware = async (ctx) => {
    try {
        await send(ctx, ctx.path, {
            root: path.resolve('../frontend/dist'),
            index: 'index.html'
        });
    } catch (err) {
        console.log('koa-send path resolution error:', err);
        await send(ctx, 'index.html', {root: path.resolve('../frontend/dist')});
    }
};


module.exports = {createSwaggerUiMiddleware, createSwaggerValidateMiddleware, jwtDecodeMiddleware, staticMiddleware, loggingMiddleware};