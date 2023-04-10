// const express = require('express');
// const { readFile } = require('fs');
// const router = express.router()
// const path = require('path')

// router.get('/', (req,res) => {
// res.sendFile(path.join(__dirname, '../public/'))
// })

// router.get('/api', (req,res) => {
//  readFile('./db/db.json').then((data) => res.json(JSON.parse(data)))   
// })

// module.export = router




const express = require('express')


const path = require('path')


const router = express.Router()


router.get("/api/notes", (req, res) => 
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
)


module.exports = router


  