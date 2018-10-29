
const Router = require('koa-router');

const restaurants = require('../business/restaurants');
const users = require('../business/users');
const orders = require('../business/orders');
const {ObjectId} = require('mongodb');


const bindRoutes = () => {

        
    const router = new Router({prefix: '/v0/'});

    router.get('restaurants', async (ctx) => {
        ctx.body = await restaurants.getAllRestaurants();
    });
    router.delete('restaurants', async (ctx) => {
        ctx.body = await restaurants.deleteAllRestaurants();
    });
    router.post('restaurants', async (ctx) => {
        ctx.body = await restaurants.createRestaurant(ctx.request.body);
    });
    router.get('restaurants/:name', async (ctx) => {
        ctx.body = await restaurants.getRestaurant(ctx.params.name);
    });
    router.delete('restaurants/:name', async (ctx) => {
        ctx.body = await restaurants.deleteRestaurant(ctx.params.name);
    });
    router.put('restaurants/:name', async (ctx) => {
        ctx.body = await restaurants.updateRestaurant(ctx.params.name, ctx.request.body);
    });

    router.get('orders', async (ctx) => {
        ctx.body = await orders.getAllOrders();
    });
    router.post('orders', async (ctx) => {
        ctx.body = await orders.createOrder(ctx.request.body);
    });
    router.delete('orders', async (ctx) => {
        ctx.body = await orders.deleteAllOrders();
    });
    router.get('orders/:id', async (ctx) => {
        ctx.body = await orders.getOrder(ctx.params.id);
    });
    router.get('cancel/orders/:id', async (ctx) => {
        ctx.body = await orders.cancelOrder(ObjectId(ctx.params.id));
    });


    router.get('auth', async (ctx) => {
        const accessToken = await users.auth(ctx.query.code);
        
        console.log('access_token:', accessToken);
        ctx.body = accessToken;    
    });


    return router.routes();
};

module.exports = { bindRoutes };