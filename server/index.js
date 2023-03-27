const express = require("express");
const bodyParser=require("body-Parser");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"password",
    database:"rx",
}); 

app.get("/api/get", (req,res)=>{
    const sqlGet = "SELECT * FROM drugs WHERE Pharmacistchoice = '*'"
   db.query(sqlGet,(err,data)=>{
        res.send(data);
  })  
})

app.listen(3001,()=>{
    console.log("running");
})