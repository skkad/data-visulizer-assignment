

const mongoose = require('mongoose');
const Schema = mongoose.Schema 

const userSchema = new Schema({
    intensity: Number,
    likelihood: Number,
    relevance: Number,
    year: Number,
    country: String,
    topics: String,
    region: String,
    city:String
})

const User = mongoose.model('UserData',userSchema);
module.exports = User;