const express = require('express')
const app = express()
const port = 80
let count = 0;

app.get('/count', (req, res) => {
  count = count + 1;
  res.json({count: count, name: "romb"})
})


app.listen(port, () => {
  console.log("serveri i startua")
})



