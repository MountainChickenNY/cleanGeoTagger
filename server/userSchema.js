const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Data = require('./dataModel');

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    tags: [{type: Schema.ObjectId, ref: 'Data'}]
});

module.exports = mongoose.model('User', userSchema);