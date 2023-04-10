//Imports Express 
const express = require('express');
const app = express();
const store = require('../db/store');
const router = express.Router();


app.get('/notes', (req, res) => {
    store.collectAllNotes()
    .then((notes) => {
        return res.JSON(notes)
    })
})

app.post('/notes', (req, res) => {
    store.addingNotes(req.body)
    .then((notes) => res.JSON(notes))
})

//Exports the route
module.exports = router


  