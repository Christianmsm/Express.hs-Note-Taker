// Imports Express
const express = require('express');
// Imports the Api route & HTML route
const htmlRoute = require('./routes/html.js');
const apiRoute = require('./routes/api.js');
//Initializes Express to be used in the app
const app = express();
//Variable for the app to be used on Port 3001, process enviroment is used for Heroku
const PORT = process.env.PORT || 3001;

//Middleware to parse JSON & urlencoded data
app.use(express.json());
app.use(express.urlencoded({ exntended: true }));


app.use(express.static('public'));

app.use('/', htmlRoute);
app.use('/api', apiRoute);

app.listen(PORT, () => {
console.log(`App listening at http://localhost:${PORT}`)
});