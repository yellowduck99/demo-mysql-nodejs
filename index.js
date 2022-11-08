import express from 'express'

const PORT = 3000
const app = express()


import route from './lib/db.js'

app.use(route)

app.listen(PORT, ()=> {
console.log(`App listening at port ${PORT}`)

})
