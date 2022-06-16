const express = require('express')
const app = express()
const port = 8080

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  next();
});


app.use(express.json())

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

app.get('/reset', (req, res) => {
  count = 0;
  res.json({count: count, name: "romb"})
})

app.post('/post', (req, res) => {
  console.log(req.body)

  res.json({count: count, name: "romb"})
})

app.listen(port, () => {
  console.log("serveri i startua")
})



