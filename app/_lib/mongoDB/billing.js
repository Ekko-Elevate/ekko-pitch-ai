const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
  Subscription: String,
  SubscriptionDate: String,
  STRID: Number,
  PID: Number
}, { collection: 'billings' });

export const Billings = mongoose.model('Billing', billingSchema);
