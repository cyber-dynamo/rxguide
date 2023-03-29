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

/* Prescription page original state*/
app.get("/api/get", (req,res)=>{
    const sqlGet = "SELECT * FROM drugs WHERE Pharmacistchoice = '*'"
   db.query(sqlGet,(err,data)=>{
        res.send(data);
  })  
})

/* Prescription page filtering drugs*/
app.get("/api/get:Condition",(req,res)=>{
    const Condition = req.params.Condition;
    var sql = mysql.format("SELECT * FROM drugs WHERE `Condition`=?", Condition);
    db.query(sql, (err,data)=>{
      res.send(data);
    })
  })

  /* Medication page Accordion*/
  app.get("/api/meds", (req,res)=>{
    const sqlGetMed = "SELECT * FROM mrs"
   db.query(sqlGetMed,(err,data)=>{
    console.log(data);
        res.send(data);
  })  
})

app.listen(3001,()=>{
    console.log("running");
})