const mysql = require('mysql2')
const express = require('express')

const app = express()


app.get('/test',(req,res,next) => {
    let db = req.con
    let sql = "SELECT * FROM student"
    db.query(sql, (err,result,fields) => {
        if (err){throw err}
        console.log(result)
        res.send(result)
    })
    
})


module.exports = app