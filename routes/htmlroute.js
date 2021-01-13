//dependencies
const notes = require ("express").Router();
const path = require ("path");
const fs = require ("fs");

//routes
notes.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

notes.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

module.exports = notes;