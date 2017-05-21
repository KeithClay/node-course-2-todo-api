const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} =require('./../server/models/todo');
const {User} =require('./../server/models/user')

// Todo.remove({}).then((result) => {
//   console.log(result);
// });


// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: 'aof;idsfo;aisdjfo;adsih'}).then((todo) => {
  console.log(todo);
})


Todo.findByIdAndRemove('dfljasdofiasho;siho').then((todo) => {
  console.log(todo);
})
