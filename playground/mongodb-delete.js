// const MongoClient = require('mongodb').MongoClient;
// same code as above except allows us to pull off - destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database server');
  }
  console.log('Connected to database server');

// // deleteMany
// db.collection('Users').deleteMany({firstName: 'Keith'}).then ((result) => {
//   console.log(result);
// });

// deleteOne
// db.collection('Todos').deleteOne({text: 'Get gas'}).then ((result) => {
//   console.log(result);
// });

// findOneAndDelete
db.collection('Users').findOneAndDelete({
  _id: new ObjectID('591ca9a697abe36a6fdc5bdb')
}).then ((results) => {
  console.log(JSON.stringify(results, undefined, 2));
});



  //db.close();
});
