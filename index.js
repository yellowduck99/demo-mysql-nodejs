import express from 'express'
import mysql from 'mysql2'
import CONFIG from './config.js'

const PORT = 3000
const app = express()

const conn = mysql.createConnection(CONFIG);


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
