const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended : true}));

app.listen(port,()=>{
    console.log("listening on 3000");
});

app.get("/register",(req,res)=>{
    res.send("get request ");
});

app.post("/register",(req,res)=>{
    let {user , pass}= req.body;
    console.log(req.body);
    res.send(`post request to ${user}`);
});