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

// link to seperate api file
app.use((req,res,next) => {
    req.con = conn;
    next()
})

const route = require(__dirname+'/lib/db.js')
app.use(route)

app.listen(PORT, ()=> {
    console.log(`App listening at port ${PORT}`)

})
