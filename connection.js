const mysql = require('mysql');
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"socka",
    port:3306

});

con.connect((err)=>{
    if(err) throw err;
    console.log("Connection stablished");
});

module.exports.con = con; 