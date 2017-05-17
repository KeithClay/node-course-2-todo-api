// const MongoClient = require('mongodb').MongoClient;
// same code as above except allows us to pull off - destructuring
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);  provides ObjectID to screen

//create new variables from object property
// var user = {name: 'keith', age: 57};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database server');
  }
  console.log('Connected to database server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   // _id: 123, //can add ids to mongodb
  //   firstName: 'Keith',
  //   lastName: 'Clay',
  //   age: 57,
  //   location: 'at home',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());  //allows access to time stamp
  // });

  db.close();
});
