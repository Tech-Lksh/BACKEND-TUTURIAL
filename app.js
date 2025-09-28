{/* Beignner Level production server creation */}
{/*
    
const http = require('http')

const server = http.createServer( (req, res)=> {
    if(req.url == "/about") {
        res.end('The about page')
    } 

    if(req.url == "/profile") {
        res.end('The profile page')
    }

    if(req.url == "/") {
        res.end('The home page')
    }
})

server.listen(3000)

*/}


{/* Production Level Server Creation */}
const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res)=> {
    res.render('index')
})

app.get('/about', (req, res)=> {
    res.send('About Page')
})

app.listen(3000)