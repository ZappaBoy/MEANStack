'use strict'

const Mongoose = require('mongoose')

const UserSchema = new Mongoose.Schema({
	username: {
		type: String,
		required: true,
		index: true,
		unique: true
	},

	password: {
		type: String,
		required: true,
	},

	active: {
		type: Boolean,
		required: true
	}
})

const userModel = Mongoose.model('user', UserSchema)

module.exports = userModel
