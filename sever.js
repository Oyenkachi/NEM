const express = require("express");
require('dotenv').config();
const mongoose = require('mongoose');
const carRoutes = require('./app/routes/cars')
const cors = require("cors")
const app = express();




mongoose.connect('mongodb://127.0.0.1:27017/cardb')
.then(() => console.log('Database Connected'))
.catch(err => {
  console.log(err);
  process.exit();
})

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));  //false
app.use(express.urlencoded({ extended: false }));   

app.use(cors())
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Ohayo Caleb." });
});

app.use('/cars', carRoutes )

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

