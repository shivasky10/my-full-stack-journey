const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodoverride = require("method-override");

app.use(methodoverride("_method"));

app.use(express.urlencoded({extended:true}));

let posts =[
    {
        id:uuidv4(),
        username : "shiva",
        content :"hai hello this is shiva"
    },
    {
        id:uuidv4(),
        username : "saii",
        content :"heyyy.... this is saii"
    },
    {
        id:uuidv4(),
        username : "Skyyy",
        content :"namasteee iam skyyy"
    }
]

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts}); 
    // file will be render and posts data will be send to index.ejs in views folder
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})


app.post("/posts",(req,res)=>{
   let {username , content}=req.body;
   let id = uuidv4();
   posts.push({id,username,content});
   console.log(posts);
    res.redirect("/posts");
})

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newcontent = req.body.content;
    console.log(newcontent);
    let post = posts.find((p)=>id==p.id);
    post.content=newcontent;
    console.log(post);
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id==p.id);
    res.render("show.ejs",{post});
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id==p.id);
    res.render("edit.ejs",{post});
})

app.delete("/posts/:id",(req,res)=>{
     let {id} = req.params;
    posts = posts.filter((p)=>id!==p.id);
    res.redirect("/posts");
})



app.listen(port,()=>{
    console.log("listening on 3000");
})