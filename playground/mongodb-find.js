// const MongoClient = require('mongodb').MongoClient;
// same code as above except allows us to pull off - destructuring
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database server');
  }
  console.log('Connected to database server');

  //allows to find everything - find shows how to query by value
  //db.collection('Todos').find({completed: false}).toArray().then((docs) => {

//   db.collection('Todos').find({
//     _id: new ObjectID('591c715997abe36a6fdc4977')
//   }).toArray().then((docs) => {
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
//   }, (err) => {
//     console.log('Unable to fetch todos', err);
// });

//to count
// db.collection('Todos').find().count().then((count) => {
//     console.log(`Todos count: ${count}`);
//       }, (err) => {
//     console.log('Unable to fetch todos', err);
// });

db.collection('Users').find({firstName:'Keith'}).toArray().then((docs) => {
  console.log(JSON.stringify(docs, undefined, 2));
});

  //db.close();
});
