const express = require('express');
const { get } = require('mongoose');
const router = express.Router();
const { getRoutes, addRoute, deleteRoute, updateRoute } = require('../controllers/route_controller');
const { addUser, loginUser, checkToken, deleteUser, getUserInfo } = require('../controllers/user_controller');
const { addComment, getComments } = require('../controllers/comment_controller')
const auth = require('../middleware/auth')

router
	.route('/dashboard')
	.get(getRoutes)
	.post(addRoute);

router
	.route('/dashboard:id')
	.put(updateRoute)
	.delete(deleteRoute);
		
router
	.route('/register')
	.post(addUser);

router
	.route('/login')
	.post(loginUser)

router
	.route('/token')
	.post(checkToken)

router
	.delete('/profile', auth, deleteUser)

router
	.get('/', auth, getUserInfo)

router
	.route('/comments')
	.get(getComments)
	.post(addComment)

module.exports = router;