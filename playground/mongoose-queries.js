const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} =require('./../server/models/todo');
const {User} =require('./../server/models/user')

// var id = '591df02d8ab05aa66e86918c11';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));



User.findById('591e1278d5f33de5722f241a').then((user) => {
  if (!user) {
    return console.log("User not found");
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
