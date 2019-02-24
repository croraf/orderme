const { initializeDatabaseInterface, shutdownDatabaseInterface } = require('../src/dal/db');
const { getAllRestaurants, getRestaurant, createRestaurant, deleteRestaurant, updateRestaurant } = require('../src/dal/restaurants');

const {restaurantsList} = require('./restaurants');


const reshapeDb = async () => {

    await initializeDatabaseInterface();
    console.log('- Database interface initialized');

    const deleteCount = await deleteRestaurant();
    console.log('- All restaurants deleted. Deleted count:', deleteCount);


    const restaurantsCreator = await Promise.all(
        restaurantsList.map(restaurant => createRestaurant(restaurant))
    );

    // console.log(restaurantsCreator);
    console.log('- All restaurants created. Create count:', restaurantsCreator.length);

    await shutdownDatabaseInterface();
    


    /* const allRestaurants = await getAllRestaurants();
    console.log('- All restaurants:', allRestaurants); */

    /* const restaurantChello = await getRestaurant('Chello');
    console.log('- Restaurant Chello:', restaurantChello);

    const deleteCount2 = await deleteRestaurant({ name: 'Chello' });
    console.log('- Restaurant Chello deleted. Deleted count:', deleteCount2);


    await shutdownDatabaseInterface();
    console.log('- Database interface shut down'); */
};

reshapeDb();

