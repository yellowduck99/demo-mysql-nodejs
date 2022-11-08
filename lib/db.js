import  express  from 'express';
import query from '../query.js';

const app = express()
app.use(express.json())

app.get('/get', async(req,res) => {
    let rows = await query('SELECT * FROM Employees');
    console.log(rows);
    res.send(rows)
})


app.post('/addRecord', async(req,res) => {
    let { ...elements } = req.body;
    let keyList = [];
    let valuelist = [];
    Object.keys(elements).forEach(key=>{
        keyList.push(key)
        valuelist.push("'"+elements[key]+"'")
    })
    let sql = "INSERT INTO Region ("+keyList.join(',')+") VALUES ("+valuelist.join(",")+")";
    let rows = await query(sql);
    res.send('ok');
    
})
// query all
/* app.get('/get_records',(req,res,next) => {
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
    Object.keys(elements).forEach(key=>{
        keyList.push(key)
        valuelist.push("'"+elements[key]+"'")
    })
    let sql = "INSERT INTO customers ("+keyList.join(',')+") VALUES ("+valuelist.join(",")+")";
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
    Object.keys(elements).forEach(key=>{
        arr.push(`${key} = '${elements[key]}'`)
    })
    let sql = "UPDATE customers SET "+arr.join(",")+" WHERE id = "+id
    db.query(sql, (err,result,fields) =>{
        if (err) {throw err}
    })
    res.send('success')
    
}) */

export default app