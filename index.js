const mysql = require('mysql2')
const express = require('express')
const PORT = 3002
const app = express()
const IP = '' // your DB IP
const PASSWORD = '' // your DB root pw

const conn = mysql.createConnection({ 
        host:IP,
        user:'root',
        password: PASSWORD,
        database: 'test'
});


conn.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('connecting success');
});


app.use((req,res,next) => {
    req.con = conn;
    next()
})

const route = require(__dirname+'/lib/db.js')
app.use(route)




app.listen(PORT, ()=> {
    console.log(`App listening at port ${PORT}`)

})


// Sample function from W3 tutorial
// Create table
/* conn.connect((err) => {
    if (err) {throw err}
    console.log('connected')
    let sql = "CREATE TABLE test ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY"
    conn.query(sql, (err ,result) => {
        if (err) {throw err}
        console.log("Table created")
    })
}) */


// Insert data
/* conn.connect((err)=> {
    if (err) {throw err}
    console.log('connected')
    let sql = "INSERT INTO student (name, address) VALUES ('Company Inc', 'High')"
    conn.query(sql, (err,result) => {
        if (err){throw err}
        console.log('1 record inserted')
    })
}) */

// Query
/* conn.connect((err)=> {
    if (err) {throw err}
    console.log('connected')
    let sql = "SELECT * FROM student"
    conn.query(sql, (err,result,fields) => {
        if (err){throw err}
        console.log(result)
    })
}) */

//main()
