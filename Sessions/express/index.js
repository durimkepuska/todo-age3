const express = require('express')
const app = express()
const port = 8080
let count = 0;

// Add headers before the routes are defined
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/count', (req, res) => {
  count = count + 1;
  res.json({count: count, name: "romb"})
})

app.get('/last', (req, res) => {
  res.json({count: count, name: "romb"})
})

app.get('/decrease', (req, res) => {
  count = count - 1;
  res.json({count: count, name: "romb"})
})



app.listen(port, () => {
  console.log("serveri i startua")
})



