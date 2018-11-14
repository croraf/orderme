
const Router = require('koa-router');

const restaurants = require('../business/restaurants');
const users = require('../business/users');
const orders = require('../business/orders');
const auth = require('../business/auth');
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

    const jwt = require('jsonwebtoken');
    router.get('users', async (ctx) => {
        console.log('user:', jwt.verify(ctx.request.headers['x-access-token'], 'abcdef'));
        ctx.body = await users.getUsers();
    });
    router.post('users', async (ctx) => {
        ctx.body = await users.createUser(ctx.request.body);
    });
    router.delete('users', async (ctx) => {
        ctx.body = await users.deleteUsers();
    });
    router.get('users/:id', async (ctx) => {
        ctx.body = await users.getUser(ctx.params.id);
    });


    router.get('auth', async (ctx) => {
        ctx.body = await auth.auth(ctx.query.provider, ctx.query.code);
    });


    return router.routes();
};

module.exports = { bindRoutes };