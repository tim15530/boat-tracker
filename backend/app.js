const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const config = require('../config.js');
const connectionString = config.envDBConnectionString;
const port = config.envPort;

//listen for connections
app.listen(port, () => {
  console.log('App listening');
});

//loads frontend public files into browser
app.use(express.static(path.join(__dirname, '../frontend/public')));

//open db connection
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {console.log("db connected")}
).catch(err => {"db connection failed: ", err});

//root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//boat routes
const boats = require('./routes/api/boatRoutes.js');
app.use('/boats', boats);
