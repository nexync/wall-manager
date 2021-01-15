const Comment = require('../models/Comment')


exports.getComments = async(req,res) => {
	try {
		console.log('getting comments')
		const comments = await Comment.find()
		return res.status(200).json({
			success: true,
			data: comments,
	})
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
	})
	}
}

exports.addComment = async (req,res) => {
	try {
		const comment = await Comment.create(req.body);
		return res.status(201).json({
			success: true,
			data: comment
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
	})
	}
}