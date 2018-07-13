const { createServer } = require('http');
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

var routes = require('./routes');

const app = express();

app.disable('x-powered-by');
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

app.use(express.static(path.resolve(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

const server = createServer(app);

server.listen(PORT, err => {
  if (err) throw err;
  console.log('Server started!');
});
