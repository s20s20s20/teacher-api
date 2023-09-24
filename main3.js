const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000;

app.use(cors())
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/:name', function(req,res) {
    const p = req.params
    // console.log(p)
    //const q = req.query
    //console.log(q)

    if(p.name === "김동연") 
        res.json({ 'infor' : '2-1 담임' })
    else if(p.name === "이영기")
        res.json({ 'infor' : '2-2 담임' })
    else if(p.name === "김주영")
        res.json({ 'infor' : '2-3 담임' })
    else if(p.name === "김민기")
        res.json({ 'infor' : '2-1 부담임' })
    else 
        res.json({ 'infor' : 'unknown' })
})

// app.get('/young',function(req,res) {
//     res.json({ 'infor' : '2-2 담임' })
// })

// app.get('/joo',function(req,res) {
//     res.json({ 'infor' : '2-3 담임' })
// })

// app.get('/min',function(req,res) {
//     res.json({ 'infor' : '2-1 부담임' })
// })

app.listen(port , ()=>{
    console.log("http://localhost:3000")
})