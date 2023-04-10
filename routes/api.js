const app = require('express').Router();
const store = require('../db/store');



app.get('/notes', (req, res) => {
    store.collectAllNotes()
    .then((notes) => {
        return res.json(notes)
    })
})

app.post('/notes', (req, res) => {
    store.addingNotes(req.body)
    .then((notes) => res.json(notes))
})

app.delete('/notes', (req, res) => {
    store.deletingNotes(req.params.id)
    .then(() => res.json({ok:true}))
})
//Exports the route
module.exports = app;


  