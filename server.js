const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');

// Sets up the Express app
// =============================================================
const app = express();
const PORT = process.env.PORT || 5001;

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyparser.json());

// Static directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// =============================================================
require('./routes')(app);
// Import routes and give the server access to them.

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Views
// ============================================================
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
	console.log('app listening on PORT ' + PORT);
});

// our module get's exported as app.
module.exports = app;
