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


connection.query(`CREATE TABLE IF NOT EXISTS users  (
                    id int AUTO_INCREMENT,
                    accountId varchar(50),
                    pin int,
                    PRIMARY KEY (id)
                    );`, (e, r) => {})

connection.query(`CREATE TABLE IF NOT EXISTS bilances (
  id int AUTO_INCREMENT,
  userId int,
  bilance FLOAT,
  PRIMARY KEY (id),
  FOREIGN KEY (userId) REFERENCES users(id)
);`, (e, r) => {})

connection.query("Select * from users", (e, r) => {
  if(r !== undefined && r.length === 0){
    for(let i = 1; i <= 50; i++){
      connection.query(`Insert into users (accountId, pin) values ("user-${i}", 1234);`, (e, r, f) => {
        const newUserId = r.insertId
        console.log(`User ${newUserId} created`)
        connection.query(`Insert into bilances (userId, bilance) values (${newUserId}, 0);`, (e, r, f) => {
          console.log(`Bilance for user ${newUserId} created`)
        })
      })
    }
  }
})



app.post('/login', (req, res) => {
  const accountNumber = req.body.accountNumber
  const pin = req.body.pin
  const sql = `Select * FROM users where accountId = "${accountNumber}" and pin = ${pin};`
  console.log(sql)
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

app.patch('/credit/:userId', (req, res) => {
  const userId = req.params.userId;
  const creditValue = req.body.creditValue
  const sql = `UPDATE bilances set bilance = bilance - ${creditValue} where userId = ${userId} AND bilance >= ${creditValue};`;
  connection.query(sql, (e, response) => {
    if(e) throw e
    res.json({valid: true})
  })
})

app.listen(port, () => {
  console.log("serveri started on port " + port)
})
