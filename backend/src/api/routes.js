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
        const appId = '307207183167195';
        const redirectURI = 'http://localhost:3000/v0/restaurants';
        const state = '1234'
        const oAuthFacebookLoginPage = 
            `https://www.facebook.com/v3.1/dialog/oauth?client_id=${appId}&redirect_uri=${redirectURI}&state=${state}`;
        ctx.redirect(oAuthFacebookLoginPage);
    });
};

module.exports = {defineRoutes};