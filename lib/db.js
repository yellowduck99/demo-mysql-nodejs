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
    let {...elements} = req.body;
    let keyList = []
    let valuelist = []
    Object.keys(elements).map(key=>{
        keyList.push(key)
        valuelist.push("'"+elements[key]+"'")
    })
    let sql = "INSERT INTO student ("+keyList.join(',')+") VALUES ("+valuelist.join(",")+")";
    console.log(sql)
    db.query(sql, (err,result,fields) =>{
        if (err) {throw err}
    })
    res.send('success')
})

app.post('/edit_record', (req,res,next) => {
    let db = req.con;
    let {id, ...elements} = req.body
    let arr = []
    Object.keys(elements).map(key=>{
        arr.push(`${key} = '${elements[key]}'`)
    })
    let sql = "UPDATE student SET "+arr.join(",")+" WHERE id = "+id
    db.query(sql, (err,result,fields) =>{
        if (err) {throw err}
    })
    res.send('success')
    
})

module.exports = app