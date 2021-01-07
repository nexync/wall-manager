const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
	try {
		const token = req.header('x-auth-token');
		if (!token)	return res.status(401).json({
			success: false,
			error: "No authentication token"
		})

		const verified = jwt.verify(token, process.env.JWT_SECRET);
		if (!verified)	return res.status(401).json({
			success: false,
			error: "Wrong authentication token"
		})

		req.user = verified.id;
		next();
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: err.message
		})
	}
}
module.exports = auth;