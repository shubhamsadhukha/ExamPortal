const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const router = require('./server/routes/api')
const uri = 'mongodb://localhost:27017/examportalDB';

// API file for interacting with MongoDB
// const api = require('./server/routes/api');
app.use(morgan('dev'));
mongoose.connect(uri);
const db = mongoose.connection;
(mongoose).Promise = global.Promise;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/api', router);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'serverhome.html'));
});

//Set Port
const port = process.env.PORT || '5000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Exam Portal running on localhost:${port}`));