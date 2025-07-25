const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.use(express.static(path.join(__dirname,"public")));


app.set("views",path.join(__dirname,"/views"));

app.set("view engine ","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/dice",(req,res)=>{
    let val = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{ num : val});
})

app.get("/ig/:username",(req,res)=>{
    // let { username } = req.params;
    // let followers = ["sai","ravi","ram"];
    // console.log(username);


    let instadata = require("./data.json");
    const {username} = req.params;
    let data = instadata[username];
    console.log(data);

    res.render("insta.ejs",{data});
})



app.listen(port,()=>{
    console.log("listening on 3000");
})