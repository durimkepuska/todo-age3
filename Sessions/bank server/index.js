const express = require('express')
const mysql = require('mysql')
const app = express()
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bank'
})
connection.connect()
const port = 8080

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');

  next();
});

app.use(express.json())

app.post('/login', (req, res) => {
  const accountNumber = req.body.accountNumber
  const pin = req.body.pin
  const sql = `Select * FROM users where accountId = ${accountNumber} and pin = ${pin};`
  connection.query(sql, (error, user) => {
    if(user !== undefined && user.length === 1){
      return res.json({loggedIn: true, userId: user[0].id})
    } else {
      return res.json({loggedIn: false})
    }
  })
})


app.get('/bilance/:userId', (req, res) => {
  const userId = req.params.userId;
  const sql = `Select bilance from bilances where userId = ${userId};`
  connection.query(sql, (e, shuma) => {
    
      if(shuma !== undefined && shuma.length === 1){
        return res.json({bilance: shuma[0].bilance})
      } else {
        return res.json({bilance: -1})
      }
  })
  
})

app.patch('/deposit/:userId', (req, res) => {
  const userId = req.params.userId;
  const depositValue = req.body.depositValue
  const sql = `UPDATE bilances set bilance = bilance + ${depositValue} where userId = ${userId};`;
  connection.query(sql, (e, response) => {
    if(e) throw e
    res.json({valid: true})
})
  
})

app.patch('/credit', (req, res) => {
  res.json({valid: true})
})

app.listen(port, () => {
  console.log("serveri started on port " + port)
})


