const { initializeDatabase, shutdownDatabase } = require('./dal/db');

const { getAllRestaurants, getRestaurant, createRestaurant, deleteRestaurant, updateRestaurant } = require('./dal/restaurants');

const {startServer} = require('./server');

const main = async () => {

    await initializeDatabase();
    console.log('- Database interface initialized');

    await startServer(3000);
    console.log('- Koa server started on port 3000');

    

    /*const deleteCount = await deleteRestaurant();
    console.log('- All restaurants deleted. Deleted count:', deleteCount);

    await createRestaurant({ name: 'Chello', meals: ['Pizza Hellas', 'Pizza Chello'] });
    console.log('- Restaurant Chello created');*/

    const allRestaurants = await getAllRestaurants();
    console.log('- All restaurants:', allRestaurants);

    /* const restaurantChello = await getRestaurant('Chello');
    console.log('- Restaurant Chello:', restaurantChello);

    const deleteCount2 = await deleteRestaurant({ name: 'Chello' });
    console.log('- Restaurant Chello deleted. Deleted count:', deleteCount2);


    await shutdownDatabase();
    console.log('- Database interface shut down'); */
};


main();
