module.exports = function(app) {
	const index = require('./routes/index');
	const api = require('./routes/api-routes');

	app.use('/', index);
	app.use('/api', api);
};
