import express from 'express'
import mysql from 'mysql2'

const PORT = 3002
const app = express()
const IP = '' // your DB IP
const PASSWORD = '' // your DB root pw


const conn = mysql.createConnection({ 
    host:IP,
    user:'root',
    password: PASSWORD,
    database: 'classicmodels'
});


conn.connect(function(err) {
if (err) {
    console.log(err);
    return;
}
console.log('connecting success');
});

// link to seperate api file
app.use((req,res,next) => {
req.con = conn;
next()
})

import route from './lib/db.js'

app.use(route)

app.listen(PORT, ()=> {
console.log(`App listening at port ${PORT}`)

})
