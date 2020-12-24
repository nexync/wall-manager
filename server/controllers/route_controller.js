
// @desc        Get all routes
// @routes      GET/api/v1/routes
exports.getRoutes = (req, res, next) => {
    res.send('GET routes');
}


// @desc        Add a route
// @routes      POST/api/v1/routes
exports.addRoute = (req, res, next) => {
    res.send('POST routes');
}


// @desc        Delete a route
// @routes      GET/api/v1/routes/:id
exports.deleteRoute = (req, res, next) => {
    res.send('DELETE routes');
}