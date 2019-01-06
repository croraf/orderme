const Koa = require('koa');

const koaBody = require('koa-body');
const cors = require('koa-cors');
const {
    createSwaggerUiMiddleware,
    createSwaggerValidateMiddleware,
    jwtDecodeMiddleware,
    serveIndexMiddleware,
    createStaticCacheMiddleware,
    loggingMiddleware,
} = require('./middlewares');
const {bindRoutes} = require('../api/routes');

const configureKoa = () => {

    const koaConfiguration = new Koa();
    
    koaConfiguration.use(cors({ origin: '*', allowMethods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'] }));
    koaConfiguration.use(createSwaggerUiMiddleware());
    koaConfiguration.use(koaBody());
    koaConfiguration.use(loggingMiddleware);
    koaConfiguration.use(createSwaggerValidateMiddleware());
    koaConfiguration.use(jwtDecodeMiddleware);
    koaConfiguration.use(bindRoutes());
    koaConfiguration.use(createStaticCacheMiddleware());
    koaConfiguration.use(serveIndexMiddleware);

    return koaConfiguration;
};

module.exports = { configureKoa };
