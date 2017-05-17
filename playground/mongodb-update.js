// const MongoClient = require('mongodb').MongoClient;
// same code as above except allows us to pull off - destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database server');
  }
  console.log('Connected to database server');

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('591c6eb5e90b63184ef25b45')
}, {
  $set: {
    firstName: 'Keith',
  }
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});



  //db.close();
});
