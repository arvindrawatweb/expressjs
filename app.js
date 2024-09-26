
const express =require('express');
const app = express();
const connDB = require('./conn');
const mongoose = require('mongoose'); // Optional if you're connecting to MongoDB
const Router = require('./Router/web'); // Import your router file
const bodyParser = require('body-parser');

connDB();

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set EJS as the view engine
app.set('view engine', 'ejs');


app.use(Router);


app.listen(3000, function() {
  console.log('Server is running on port 3000');
});
