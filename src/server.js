const express = require('express');
const bodyParser = require('body-parser');
const appRouter = require('./routes/routes');
const app = express();

app.use(bodyParser.json({ extended: true }));

app.use(appRouter);
app.get('/', (req, res) => {
  return res.send({ message: 'Welcome to my endpoints' });
});

app.get('/api', (req, res) => {
  return res.send({ message: 'You wanna get your mind fucking blown nigga!' });
});

app.use('*', (req, res) => {
  return res
    .status(404)
    .json({ message: 'Cannot find what you are looking for...' });
});

app.listen(3000, () => {
  console.log('App started on http://localhost:3000');
});
