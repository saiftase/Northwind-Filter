const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true, unique: true},
	price: Number
})

module.exports = mongoose.model("Product", schema);