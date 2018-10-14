
const Router = require('koa-router');

const restaurantsAPI = require('../business/restaurants');
const users = require('../business/users');
const orders = require('../business/orders');

const bindRoutes = () => {

        
    const router = new Router({prefix: '/v0/'});

    router.get('restaurants', async (ctx) => {
        ctx.body = await restaurantsAPI.getAllRestaurants();
    });
    router.delete('restaurants', async (ctx) => {
        ctx.body = await restaurantsAPI.deleteAllRestaurants();
    });
    router.post('restaurants', async (ctx) => {
        ctx.body = await restaurantsAPI.createRestaurant(ctx.request.body);
    });


    router.get('restaurants/:name', async (ctx) => {
        ctx.body = await restaurantsAPI.getRestaurant(ctx.params.name);
    });
    router.delete('restaurants/:name', async (ctx) => {
        ctx.body = await restaurantsAPI.deleteRestaurant(ctx.params.name);
    });
    router.put('restaurants/:name', async (ctx) => {
        ctx.body = await restaurantsAPI.updateRestaurant(ctx.params.name, ctx.request.body);
    });

    
    router.post('orders', async (ctx) => {
        ctx.body = await orders.makeOrder(ctx.query.restaurantName, ctx.request.body);
    });


    router.get('auth', async (ctx) => {
        const accessToken = await users.auth(ctx.query.code);
        
        console.log('access_token:', accessToken);
        ctx.body = accessToken;    
    });


    return router.routes();
};

module.exports = { bindRoutes };