const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const mysql = require('./connection').con;


// configuration of app object
app.set('view engine','hbs');
const viewPath = path.join(__dirname,'view');
const pubPath = path.join(__dirname,'public');

// loading static files from the public folder (static file means css, js, images used)
app.use(express.static(pubPath))


// routing
app.get('/', (req,resp)=>{
    resp.render(`${viewPath}/index`)
})

app.get('/add', (req,resp)=>{
    resp.render(`${viewPath}/add`)
})

app.get('/delete', (req,resp)=>{
    resp.render(`${viewPath}/delete`)
})

app.get('/search', (req,resp)=>{
    resp.render(`${viewPath}/search`)
})

app.get('/update', (req,resp)=>{
    resp.render(`${viewPath}/update`)
})

app.get('/view', (req,resp)=>{
    resp.render(`${viewPath}/index`)
})


// creating server
app.listen(port, (err)=>{
    if(err)
    throw err;
    else
    console.log("Server is running at port no: %d",port);
})