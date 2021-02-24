'use strict'

const userModel = require('../Connection').models.user

const user_error = -2
const user_data_error = -4

async function isUserOfDB(username) {
	return new Promise((resolve, reject) => {
		userModel.findOne({'username': username}, (error, userData) => {
			if (userData !== null) {
				console.log('User - isUserOfDb - True')
				resolve(true)
			} else {
				if (!error) {
					console.log('User - isUserOfDb - False')
					resolve(false)
				} else {
					console.log('User - isUserOfDb - ERROR: ' + error)
					reject(error)
				}
			}
		})
	})
}

async function isUsernameOfDB(username) {
	return new Promise((resolve, reject) => {
		userModel.findOne({'username': username}, (error, userData) => {
			if (userData !== null) {
				resolve(true)
			} else {
				if (!error) {
					resolve(false)
				} else {
					reject(error)
				}
			}
		})
	})
}

async function saveUser(userData) {
	const isValidUsername = await isUsernameOfDB(userData.username)
	const isAlreadyUser = await isUserOfDB(userData.username)

	return new Promise((resolve, reject) => {
		if (!isAlreadyUser) {
			if (!isValidUsername) {
				const user = new userModel(userData)

				user.save((error, data) => {
					if (data !== null) {
						console.log('User - saveUser - Saved')
						resolve(true)
					} else {
						if (!error) {
							console.log('User - saveUser - Not Saved')
							resolve(false)
						} else {
							console.log('User - saveUser - ERROR: ' + error)
							reject(error)
						}
					}
				})
			} else {
				reject(user_data_error)
			}
		} else {
			console.log('User already exist')
			reject(user_error)
		}
	})
}

async function getUserData(username) {
	const isValidUserID = isUserOfDB(username)

	return new Promise((resolve, reject) => {
		if (isValidUserID) {
			userModel.findOne({'username': username}, (error, userData) => {
				if (userData !== null) {
					const user = new userModel(userData)
					resolve(user)
				} else {
					if (!error) {
						console.log('User - getUserData - No Data')
						reject(error)
					} else {
						console.log('User - getUserData - ERROR: ' + error)
						reject(error)
					}
				}
			})
		} else {
			reject(user_error)
		}
	})
}

async function changeUserData({userData}) {
	const isAlreadyUser = await isUserOfDB(userData.apiKey)

	return new Promise((resolve, reject) => {
		if (!isAlreadyUser) {
			resolve(userModel.updateOne({'username': userData.username},
				{
					$set: {
						'username': userData.username,
						'active': userData.active
					}
				})
				.lean().exec())
		} else {
			reject(user_data_error)
		}
	})
}

module.exports = {
	isUserOfDB,
	saveUser,
	getUserData,
	changeUserData
}
