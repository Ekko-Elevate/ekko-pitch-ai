const mongoose = require('mongoose');

const creationSchema = new mongoose.Schema({
  CID: Number,
  S3ID: String
}, { collection: 'creations' });

export const Creations = mongoose.model('Creation', creationSchema);

