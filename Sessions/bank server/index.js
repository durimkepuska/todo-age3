const express = require('express')
const app = express()
const port = 8080

const accountNumber = '123456789'
const pin = '8888'
const bilance = 8000;

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');

  next();
});

app.use(express.json())

app.post('/login', (req, res) => {
  console.log(req.body);
  if(req.body.accountNumber === accountNumber && req.body.pin === pin){
    res.json({loggedIn: true})
  } else {
    res.json({loggedIn: false})
  }
})


app.listen(port, () => {
  console.log("serveri i startua")
})



