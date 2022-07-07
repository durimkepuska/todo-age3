const express = require('express')
const mysql = require('mysql')
const app = express()
const { v4: uuidv4 } = require('uuid');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bank'
})
connection.connect()
const port = 8080

const rolesAndTokens = [];

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
 
  next();
});

app.use(express.json())


connection.query(`CREATE TABLE roles (
  id int AUTO_INCREMENT,
  title varchar(50),
  PRIMARY KEY (id)
);`, (e, r) => {})

connection.query(`CREATE TABLE users (
                id int AUTO_INCREMENT,
                accountId varchar(50),
                pin int,
                roleId int,
                PRIMARY KEY (id),
                FOREIGN KEY (roleId) REFERENCES roles(id)
              );`, (e, r) => {})

connection.query(`CREATE TABLE IF NOT EXISTS bilances (
                      id int AUTO_INCREMENT,
                      userId int,
                      bilance FLOAT,
                      PRIMARY KEY (id),
                      FOREIGN KEY (userId) REFERENCES users(id)
                    );`, (e, r) => {})

connection.query("Select * from roles", (e, data) => {
  if(data !== undefined && data.length === 0){
    for(let i = 1; i <= 10; i++){
      connection.query(`Insert into roles (title) values ("Admin-${i}");`, (e, roleId, f) => {
        const newRoleId = roleId.insertId
        console.log(`Insert into users (accountId, pin, roleId) values ("user-${i}", 1234, ${newRoleId});`)
        connection.query(`Insert into users (accountId, pin, roleId) values ("user-${i}", 1234, ${newRoleId});`, (e, userId, f) => {
          const newUserId = userId.insertId
          console.log(`User ${newUserId} created`)
          connection.query(`Insert into bilances (userId, bilance) values (${newUserId}, 0);`, (e, r, f) => {
            console.log(`Bilance for user ${newUserId} created`)
          })
        })
      })
    }
  }
})



app.post('/login', (req, res) => {
  const accountNumber = req.body.accountNumber
  const pin = req.body.pin
  const sql = `Select * FROM users where accountId = "${accountNumber}" and pin = ${pin};`
  connection.query(sql, (error, user) => {
    if(user !== undefined && user.length === 1){
      const token = uuidv4();
      rolesAndTokens.push({token: token, roleId: user[0].roleId});
      return res.json({loggedIn: true, userId: user[0].id, token: token})
    } else {
      return res.json({loggedIn: false})
    }
  })
})


app.get('/bilance/:userId', (req, res) => {
  const userId = req.params.userId;
  const token = req.headers.authorization;
  // if(!rolesAndTokens.includes(token)){
  //   return res.json({unauthorized: true})
  // }

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
  const token = req.headers.authorization;
  // if(!rolesAndTokens.includes(token)){
  //   return res.json({unauthorized: true})
  // }

  const userId = req.params.userId;
  const depositValue = req.body.depositValue
  const sql = `UPDATE bilances set bilance = bilance + ${depositValue} where userId = ${userId};`;
  connection.query(sql, (e, response) => {
    if(e) throw e
    res.json({valid: true})
})
  
})

app.patch('/credit/:userId', (req, res) => {
  const token = req.headers.authorization;
  console.log(rolesAndTokens)

  const hasRoles = rolesAndTokens.map(rt => rt.roleId).includes(2)
  const hasToken = rolesAndTokens.map(rt => rt.token).includes(token)

  if(hasRoles && hasToken){
    const userId = req.params.userId;
    const creditValue = req.body.creditValue
    const sql = `UPDATE bilances set bilance = bilance - ${creditValue} where userId = ${userId} AND bilance >= ${creditValue};`;
    connection.query(sql, (e, response) => {
      if(e) throw e
      return res.json({valid: true})
    })
  } else {
    return res.json({unauthorized: true})
  }

  
})

app.post('/logout', (req, res) => {
  const token = req.headers.authorization;
  // if(!rolesAndTokens.includes(token)){
  //   return res.json({unauthorized: true})
  // }

  const index = rolesAndTokens.indexOf(token);
  if (index > -1) {
    rolesAndTokens.splice(index, 1); 
  }

  return res.json({unauthorized: true})
})


app.listen(port, () => {
  console.log("serveri started on port " + port)
})
