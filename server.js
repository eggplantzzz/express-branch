const express = require('express');
const branch = express();

branch.get('/first', (req, res, next) => {
  res.send('The first route.');
});
branch.get('/second', (req, res, next) => {
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
// branch.listen(3000, () => console.log('other thing listening'));
