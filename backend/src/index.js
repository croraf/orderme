const {initializeDatabase, shutdownDatabase} = require('./db');

const {getAllRestaurants, getRestaurant, createRestaurant, deleteRestaurant, updateRestaurant} = require('./dal');



const main = async () => {

  await initializeDatabase();
  console.log('- Database interface initialized');

  const deleteCount = await deleteRestaurant();
  console.log('- All restaurants deleted. Deleted count:', deleteCount);

  await createRestaurant({name: 'Chello', meals: ['Pizza Hellas', 'Pizza Chello']});
  console.log('- Restaurant Chello created');

  const allRestaurants = await getAllRestaurants();
  console.log('- All restaurants:', allRestaurants);

  const restaurantChello = await getRestaurant('Chello');
  console.log('- Restaurant Chello:', restaurantChello);

  const deleteCount2 = await deleteRestaurant({name: 'Chello'});
  console.log('- Restaurant Chello deleted. Deleted count:', deleteCount2);


  await shutdownDatabase();
  console.log('- Database interface shut down')
};

main();