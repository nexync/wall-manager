const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
	text: {
		type: String,
		required: true,
		trim: true,
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
	},
	anon: {
		type: Boolean,
		default: false
	}
})

module.exports = mongoose.model("Comment", commentSchema);