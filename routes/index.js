const express = require('express');
const router = express.Router();

const index_controller = require('../controllers/index_controller');

router.get('/', index_controller.index);

module.exports = router;
