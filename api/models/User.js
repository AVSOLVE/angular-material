const mongoose = require('mongoose');

const UserModel = mongoose.model('User', new mongoose.Schema({
  email: { type:String, required: true, unique: true},
  firstName:{ type:String, required: true},
  lastName:{ type:String, required: true},
  password: { type:String, required: true}
}));

module.exports = UserModel;


