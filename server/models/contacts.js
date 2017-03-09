let mongoose = require('mongoose');

// create a model class
let gamesSchema = mongoose.Schema({
    name: String,
    Phone:Number,
    Email:String
},
{
  collection: "contacts"
});

module.exports = mongoose.model('contacts', contactsSchema);
