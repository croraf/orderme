const restaurantsAPI = require('./restaurants');

const defineRoutes = (router) => {

    router.get('/v0/restaurants', async (ctx) => {
        ctx.body = await restaurantsAPI.getAllRestaurants();
    });
    router.delete('/v0/restaurants', async (ctx) => {
        ctx.body = await restaurantsAPI.deleteAllRestaurants();
    });
    router.post('/v0/restaurants', async (ctx) => {
        ctx.body = await restaurantsAPI.createRestaurant(ctx.request.body);
    });


    router.get('/v0/restaurants/:name', async (ctx) => {
        ctx.body = await restaurantsAPI.getRestaurant(ctx.params.name);
    });
    router.delete('/v0/restaurants/:name', async (ctx) => {
        ctx.body = await restaurantsAPI.deleteRestaurant(ctx.params.name);
    });
    router.put('/v0/restaurants/:name', async (ctx) => {
        ctx.body = await restaurantsAPI.updateRestaurant(ctx.params.name, ctx.request.body);
    });


    router.get('/v0/auth', async (ctx) => {
        const authCode = ctx.query.code;
        console.log('redirect from facebook received with code:', authCode);
        
        ctx.redirect('http://localhost:9002/home');
    });
};

module.exports = { defineRoutes };