const burger = require('../models/burgers.js');
exports.index = function(req, res) {
	burger.all(function(data) {
		var hbsObject = {
			burger: data,
		};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
};
