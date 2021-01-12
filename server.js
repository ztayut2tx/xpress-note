const express = require("express");
const fs = require ("fs");


var app = express();
var PORT = 3000;

var apiRoute = require("./routes/apiroute.js");
var htmlroute = require("./routes/htmlroute.js");

app.use(express.urlencoded({ extended: true, }));

app.use(express.json());

app.use(express.static("public"));

app.use(apiRoute);
app.use(htmlroute);

app.listen(PORT, function() {
    console.log(`Application listening on PORT : ${PORT}`)
});




