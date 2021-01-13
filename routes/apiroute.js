//dependencies
const notes = require ("express").Router();
const fs = require ("fs");

db = require("../db/db.json");

//Routes

//Route to see stored notes
notes.get("/api.notes.html", function(req, res) {
    db = JSON.parse(fs.readFileSync("./db/db.json"))
    res.json(db);
});
//Route to create new note, and store in db.json
notes.post("/api/notes", function (req, res) {
    let saveList = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let addNote = req.body;

    saveList.push(addNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(saveList));
    res.json(saveList)
});
    
//updates database if note is deleted
notes.delete("/api/notes/:id", function (req, res) {
    var updated = db.filter(note => { return note.id !=req.params.id }) 
    db = updated;
    fs.writeFileSync("./db/db.json", JSON.stringify(db), function() {
        res.json(db);
    });
});

module.exports = notes;