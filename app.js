const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const names = require('./routes/names');
const index = require('./routes/index');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', index);
app.use('/names', names);

const port = 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on: ${port}`)
