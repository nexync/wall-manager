const User = require('../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.addUser = async (req,res) => {
	try {
		const {email, displayname, password, password2} = req.body;

		if(!email || !password || !password2 || !displayname) {
			return res.status(400).json({
				success: false,
				error: "Not all fields have been filled."
			})
		}

		if (password.length < 5) {
			return res.status(400).json({
				success: false,
				error: "The password needs to be at least five characters long."
			})
		}

		if (password !== password2) {
			return res.status(400).json({
				success: false,
				error: "The passwords do not match."
			})
		}

		let existingUser = await User.findOne({displayname: displayname});
		if (existingUser) {
			return res.status(400).json({
				success: false,
				error: "A user with this name already exists."
			})
		}

		existingUser = await User.findOne({email: email});
		if(existingUser) {
			return res.status(400).json({
				success: false,
				error: "A user with this email already exists."
			}) 
		}

		if(displayname === "Setter" || displayname === 'Guest' || displayname === 'Admin') {
			return res.status(400).json({
				success: false,
				error: "Invalid Name."
			})
		}

		const salt = await bcrypt.genSalt();
		const passwordHash = await bcrypt.hash(password, salt);

		const newUser = new User({
			email: email,
			password: passwordHash,
			displayname: displayname,
		});
		
		const savedUser = await newUser.save();

		return res.status(201).json({
			success: true,
			data: savedUser
		})
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: err.message
		})
	}
}

exports.loginUser = async (req, res) => {
	try {
		const {email, password, comp_login} = req.body;
		
		if (!email || !password) {
			return res.status(400).json({
				success: false,
				error: "Not all fields have been filled."
			})
		}

		if (!comp_login) { //Normal user login
			const user = await User.findOne({email: email });
			if(!user) {
				return res.status(400).json({
					success: false,
					error: "User not found."
				})
			}
			
			const isMatch = await bcrypt.compare(password, user.password)
			if(!isMatch) {
				return res.status(400).json({
					success: false,
					error: "Wrong password"
				})
			}

			const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
			return res.status(200).json({
				success: true,
				token,
				data: {
					id: user._id,
					displayname: user.displayname,
					upvoted: user.upvoted
				}
			})
		}

		else {
			const competitor = await Competitor.findOne({name: email}); // this is dumb but i don't want to switch the name 
			if(!competitor) {
				return res.status(400).json({
					success: false,
					error: "Competitor not registered"
				})
			}

			if(password != competitor.netid) {
				return res.status(400).json({
					success: false,
					error: "netid not correct"
				})
			}

			const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
			return res.status(200).json({
				success: true,
				token,
				data: {
					id: user._id,
					name: user.name
				}
			})

		}
		
		
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: err.message
		})
	}
}

exports.deleteUser = async (req, res) => {
	try {
		console.log(req.params.id)
		const deletedUser = await User.findById(req.params.id);
		await deletedUser.remove();
		return res.status(200).json({
			success: true,
			data: deletedUser
		})
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: err.message
		})
	}
}

exports.checkToken = async (req, res) => {
	try {
		const token = req.header('x-auth-token');
		if (!token)	return res.json(false);

		const verified = jwt.verify(token, process.env.JWT_SECRET);
		if (!verified)	return res.json(false);

		const user = await User.findById(verified.id);
		if (!user)	return res.json(false)

		return res.json(true);
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: err.message
		})
	}
}

exports.getUserInfo = async (req, res) => {
	const user = await User.findById(req.user);
	return res.status(200).json({
		success: true,
		data: {
			displayname: user.displayname,
			id: user._id,
			upvoted: user.upvoted
		}
	})
}

exports.getUsers = async (req, res) => {
	try {
		const users = await User.find();
		return res.status(200).json({
			success: true,
			data: users
		})
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: err.message
		})
	}
}

exports.upvote = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		const {routeid, up} = req.body;
		if (!up) {
			user.upvoted.push(routeid);
		}
		else {
			user.upvoted.remove(routeid)
		}
		
		user.save()
		return res.status(200).json({
			success: true,
			data: user
	 })
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: err.message
		})
	}
}