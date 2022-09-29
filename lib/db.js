const mysql = require('mysql2')
const express = require('express')

const app = express()
app.use(express.json())

app.get('/get_records',(req,res,next) => {
    let db = req.con
    let sql = "SELECT * FROM student"
    db.query(sql, (err,result,fields) => {
        if (err){throw err}
        console.log(result)
        res.send(result)
    })
    
})

app.post('/add_record', (req,res,next) => {
    let db = req.con;
    console.log(req.body)
    let {name, address} = req.body;
    let sql = "INSERT INTO student (name, address) VALUES ('"+name+"','"+address+"')";
    db.query(sql, (err,result,fields) =>{
        if (err) {throw err}
        console.log(result)
        res.send(result)
    })
})

app.post('/edit_record', (req,res,next) => {
    let db = req.con;
    let {id, ...elements} = req.body
    let str = ''
    Object.keys(elements).map(key=>{
        str = str.concat(`${key} = '${elements[key]}',`)
    })
    str = str.slice(0,-1)
    let sql = "UPDATE student SET "+str+" WHERE id = "+id
    db.query(sql, (err,result,fields) =>{
        if (err) {throw err}
        console.log(result)
        res.send(result)
    })
    
})

module.exports = app