// create full webserver with express
const express = require('express');
const app = express();
const port = 3000;
// create a route for the homepage
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});
 