const express = require('express');
const app = express();

app.get('/first', (req, res, next) => {
  const { originalUrl, baseUrl, path } = req;
  console.log('The request url is ---> ' + originalUrl);
  console.log('The base url is ---> ' + baseUrl);
  console.log('The path is ---> ' + path);
  res.send('The first route.');
});
app.get('/second', (req, res, next) => {
  const { originalUrl, baseUrl, path } = req;
  console.log('The request url is ---> ' + originalUrl);
  console.log('The base url is ---> ' + baseUrl);
  console.log('The path is ---> ' + path);
  res.send('This is the second route.');
});
app.get('*', (req, res, next) => {
  next({ status: 404 });
});
app.use((err, req, res, next) => {
  res.send('Error handling.');
});
module.exports = app;
