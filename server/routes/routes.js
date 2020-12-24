const express = require('express');
const router = express.Router();
const { getRoutes, addRoute, deleteRoute, updateRoute } = require('../controllers/route_controller');

router
    .route('/')
    .get(getRoutes)
    .post(addRoute);

router
    .route('/:id')
    .put(updateRoute)
    .delete(deleteRoute);

module.exports = router;