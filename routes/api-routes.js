// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
const express = require('express');
const router = express.Router();
const api_controller = require('../controllers/api_controller');

router.get('/', api_controller.total);
router.post('/burgers', api_controller.new);
router.delete('/burgers/:id', api_controller.destroy);
router.put('/burgers/:id', api_controller.change);
router.put('/burgers/nameChange/:id', api_controller.nameChange);
module.exports = router;
