const notes = require ("express").Router();
const fs = require ("fs");

dataBase = require("../db/db.json");

notes.get("/api.notes.html", function(req, res) {
    db = JSON.parse(fs.readFileSync("./db/db.json"))
    res.json(db);
});

notes.post("/api/notes", function (req, res) {
    var textInput = {
        id: Math.floor(Math.random() *150),
        title: req.body.title,
        text: req.body.text
    }
    
    db.push(textInput);
    fs.writeFileSync("./db/db.json", JSON.stringify(db), function() {
        res.json(db);
    });
});

notes.delete("/api/notes/:id", function (req, res) {
    var updated = db.filter(note => {
        return note.id !=req.params.id
    })
    db = updated;
    fs.writeFileSync("./db/db.json", JSON.stringify(db), function() {
        res.json(db);
    });
});

module.exports = notes;