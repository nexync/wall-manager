const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
	text: {
		type: String,
		required: true,
		trim: true,
		maxLength: 200
	},
	createdBy: {
		type: String,
		trim: true
	},
	route: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now()
	}
})

module.exports = mongoose.model("Comment", commentSchema);