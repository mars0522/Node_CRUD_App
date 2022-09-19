const express = require('express');
const app = express();
const port = 5000;

// configuration


// routing
app.get('/', (req,resp)=>{
    resp.send("Hi, there !!")
})


// creating server
app.listen(port, (err)=>{
    if(err)
    throw err;
    else
    console.log("Server is running at port no: ", port)
})