const path = require('path');
const router = require('./routes/users');
const express = require('express');
const bodyParser = require('body-parser');
const appRouter = require('./routes/routes');
const app = express();

app.set('view engine', 'pug');

app.set('views', './views');

app.use(express.static(path.join(__dirname, '../ui')));

app.use(bodyParser.json({ extended: true }));

app.use(router);

app.use(appRouter);

app.get('/', (req, res) => {
  var file = 'index.html';
  return res.sendFile(file, { root: './' });
});

app.get('/users/api', (req, res) => {
  return res.send({ message: 'You wanna get your mind fucking blown nigga!' });
});

app.use('*', (req, res) => {
  var file = 'error.html';
  return res.sendFile(file, { root: './ui' });
});

app.listen(3000, () => {
  console.log('App started on http://localhost:3000');
});
