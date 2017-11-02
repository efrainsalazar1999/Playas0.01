'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
		name: String,
		surname: String,
		email: String,
		password: String,
		role: String,
		playa: { type: Schema.ObjectId, ref: 'playas'}
});

module.exports = mongoose.model('User', UserSchema);