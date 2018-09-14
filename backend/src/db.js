const MongoClient = require('mongodb').MongoClient;

const mongoUri = 'mongodb+srv://croraf:croraf@cluster0-mli4c.mongodb.net/test?retryWrites=true';
const dbName = 'test';

let client;
let databaseConnection;

const initializeDatabase = async () => {

  try {
    client = await MongoClient.connect(mongoUri, { useNewUrlParser: true });
  } catch (err) {
    console.log(err.stack);
    throw(err);
  }

  try {
    databaseConnection = client.db(dbName);
    // console.log('database connection:', databaseConnection);
  } catch (err) {
    console.log(err.stack);
    client.close();
    throw(err);
  }
};

const shutdownDatabase = async () => {
  client.close();
}

const getDatabaseConnection = () => databaseConnection;

module.exports = {getDatabaseConnection, initializeDatabase, shutdownDatabase};