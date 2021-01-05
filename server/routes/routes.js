const express = require('express');
const router = express.Router();
const { getRoutes, addRoute, deleteRoute, updateRoute } = require('../controllers/route_controller');
const { addUser, loginUser, checkToken, deleteUser, getUserInfo } = require('../controllers/user_controller');

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
	.route('/profile')
	.delete(deleteUser)

router
	.route('/')
	.get(getUserInfo)

module.exports = router;