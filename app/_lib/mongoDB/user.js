const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  useremail: String,
  password: String,
  subscription: String,
  token_amount: Number,
  CID: [Number]
}, { collection: 'users' });

export const User = mongoose.model('User', userSchema);

