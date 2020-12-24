const express = require('express');
const router = express.Router();
const { getRoutes, addRoute, deleteRoute } = require('../controllers/route_controller');

router
    .route('/')
    .get(getRoutes)
    .post(addRoute);

router
    .route('/:id')
    .delete(deleteRoute);

module.exports = router;