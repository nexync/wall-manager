const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		minlength: 5
	},
	displayname: {
		type: String,
	},
	upvoted: {
		type: Array,
		default: []
	},
	createdAt: {
		type: Date,
		default: Date.now()
	}
})

module.exports = mongoose.model("User", userSchema);