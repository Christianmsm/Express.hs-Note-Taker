//Imports the neccessary files for the api route
const app = require('express').Router();
const store = require('../db/store');


//This gets the notes from the store class and returns them into json
app.get('/notes', (req, res) => {
    store.collectAllNotes()
    .then((notes) => {
        return res.json(notes)
    })
});
//This is used for adding a note to the body
app.post('/notes', (req, res) => {
    store.addingNotes(req.body)
    .then((notes) => res.json(notes))
});
//This deletes a note if the user desires
app.delete('/notes', (req, res) => {
    store.deletingNotes(req.params.id)
    .then(() => res.json({ok:true}))
});
//Exports the route
module.exports = app;


  