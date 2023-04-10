//Imports the neccessary files into the html route
const express = require('express');
const path = require('path');
const router = express.Router();

// Route for the notes.html
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

//Wildcard route that will direct the user to the home page in any unforeseen situation
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  });

// Export the route
module.exports = router;