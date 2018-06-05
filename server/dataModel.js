const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    name: {type: String, required: true},
    tags: [{
        type: String
    }],
   googleInfo: [{
       type: String
   }],
  });

  //probably need to change for E6
  module.exports = mongoose.model('Data', dataSchema);