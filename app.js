// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');

// Create an instance of the express app.
var app = express();

















//  ##################### FIRE THE SERVER ###################
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//  ###################### ((((((()))))))) ################