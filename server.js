// dependencies
const express = require("express");
const fs = require ("fs");

// Starts Express
var app = express();
var PORT = process.env.PORT || 3001;

// required route files
var apiRoute = require("./routes/apiroute.js");
var htmlroute = require("./routes/htmlroute.js");

//Data Parsing
app.use(express.urlencoded({ extended: true, }));
app.use(express.json());

app.use(express.static("public"));

// Routes
app.use(apiRoute);

app.use(htmlroute);

//Initiates Server
app.listen(PORT, function() {
    console.log(`Application listening on PORT : ${PORT}`)
});




