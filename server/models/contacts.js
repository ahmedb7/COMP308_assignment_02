let mongoose = require('mongoose');

// create a model class
let contactsSchema = mongoose.Schema({
    name: String,
    Phone:Number,
    Email:String
},
{
  collection: "contacts"
});

module.exports = mongoose.model('contacts', contactsSchema);
