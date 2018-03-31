const express = require('express');
const branch = express();

branch.get('/branch/first', (req, res, next) => {
  res.send('The first route.');
});
branch.get('/branch/second', (req, res, next) => {
  res.send('This is the second route.');
});
branch.get('*', (req, res, next) => {
  const { originalUrl } = req;
  console.log('the request url is ---> ' + originalUrl);
  next({ status: 404 });
});
branch.use((err, req, res, next) => {
  res.send('Error handling.');
});
module.exports = branch;
