var mongoose = require('mongoose')
var Schema = mongoose.Schema

var PersonSchema = new Schema({
    'name': String,
    'country': String,
    'company': String,
    'email': String
})

module.exports = mongoose.model('Person', PersonSchema)