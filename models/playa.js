'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayaSchema = Schema({
		nombre: String,
		riesgo: String,
		

});

module.exports = mongoose.model('Playa', PlayaSchema);