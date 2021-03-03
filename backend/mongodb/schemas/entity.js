'use strict'

const Mongoose = require('mongoose')

const EntitySchema = new Mongoose.Schema({
	id: {
		type: String,
		required: true,
		index: true,
		unique: true
	},

	data: {
		type: Object,
		required: true,
	}
})

const entityModel = Mongoose.model('entity', EntitySchema)

module.exports = entityModel
