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

const accountNumber = '123456789'
const pin = '8888'

let bilance = 9000;

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
      console.log("LoggedIn", user);
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

app.patch('/deposit', (req, res) => {
  bilance = bilance + req.body.depositValue
  res.json({valid: true})
})

app.patch('/credit', (req, res) => {
  bilance = bilance - req.body.creditValue
  res.json({valid: true})
})

app.listen(port, () => {
  console.log("serveri i startua")
})


