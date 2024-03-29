const mongoose = require('mongoose')

const RouteSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true
	},
	setter: {
		type: String,
		trim: true
	},
	grade: {
		type: Number,
	},
	gradea: {
		type: String,
	},
	wall: {
		type: Number,
	},
	date: {
		type: String,
		default: new Date().getMonth()+1 + '/' + new Date().getDate()
	},
	editable: {
		type: Number,
		default: 0
	},
	color: {
		type: String,
	},
	rating: {
		type: Number,
		default: 0
	}
})

module.exports = mongoose.model('Route', RouteSchema);