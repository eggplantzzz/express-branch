const express = require('express');
const app = express();

app.get('/first', (req, res, next) => {
  res.send('The first route.');
});
app.get('/second', (req, res, next) => {
  res.send('This is the second route.');
});
app.get('*', (req, res, next) => {
  next({ status: 404 });
});
app.use((err, req, res, next) => {
  res.send('Error handling.');
});
module.exports = app;
