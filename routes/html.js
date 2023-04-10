//Imports express
const express = require('express');

// Import the built-in Node.js path module
const path = require('path');

//
const router = express.Router()

// Route for the notes.html
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

//Wildcard route
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
  })

// Export the router
module.exports = router