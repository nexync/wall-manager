const Comment = require('../models/Comment')


exports.getComments = async(req,res) => {
	try {
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

exports.deleteComment = async (req, res) => {
	try {
		const comment = await Comment.findById(req.params.id);
      
      if(!comment) {
         return res.status(404).json({
            success: false,
            error: 'No comment found'
         })
      }
      await comment.remove();
      return res.status(200).json({
         success: true,
         data: {}
      })
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
		})
	}
}