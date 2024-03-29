const Route = require('../models/Route');

// @desc        Get all routes
// @routes      GET/api/routes
exports.getRoutes = async (req, res) => {
	try {
		const routes = await Route.find();
		return res.status(200).json({
				success: true,
				count: routes.length,
				data: routes,
		})
	} catch (err) {
		return res.status(500).json({
				success: false,
				error: 'Server Error'
		})
	}
}

// @desc        Add a route
// @routes      POST/api/routes
exports.addRoute = async (req, res) => {
	try {
		const route = await Route.create(req.body);
		return res.status(201).json({
			success: true,
			data: route
		});
	} catch (err) {
		return res.status(500).json({
				success: false,
				error: 'Server Error'
		})
	}
}

// @desc        Edit a route
// @routes      PUT/api/routes/:id
exports.updateRoute = async (req, res) => {
	try {
		const route = await Route.findById(req.params.id);
		if('up' in req.body) {
			if (req.body.up) {
				route.rating -= 1;
			}
			else {
				route.rating += 1;
			}
		}
		else {
			const {name, setter, grade, gradea, wall, date, color, rating} = req.body;
		
			route.name = name;
			route.setter = setter;
			route.grade = grade;
			route.gradea = gradea;
			route.wall = wall;
			route.date = date;
			route.color = color;
			route.rating = rating;
		}
		route.save()
		return res.status(200).json({
				success: true,
				data: route
		})
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
		})
	}
}


// @desc        Delete a route
// @routes      GET/api/routes/:id
exports.deleteRoute = async (req, res) => {
   try {
      const route = await Route.findById(req.params.id);
      
      if(!route) {
         return res.status(404).json({
            success: false,
            error: 'No route found'
         })
      }
      await route.remove();
      return res.status(200).json({
         success: true,
         data: {}
      })
   } catch (error) {
      return res.status(500).json({
         success: false,
         error: 'Server Error'
      })
   }
}