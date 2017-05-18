var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

// var user = new User({
//   email: 'conorclay303@gmail.com    '
// });
//  user.save().then ((doc) => {
//    console.log(JSON.stringify(doc, undefined, 2));
//    }, (e) => {
//    console.log('Unable to save Todo', e)
//    });

module.exports = {User};
