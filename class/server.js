const express = require("express");
const app = express();
// const users = require("./routes/user.js");
// const posts = require("./routes/post.js");
const session =require("express-session");
const flash =require("connect-flash");
const path =require("path");


app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

const sessionoptions = {secret:"mysecretstring",saveUninitialized:true,resave:false}

app.use(session(sessionoptions));
app.use(flash());

app.get("/register",(req,res)=>{
    let{name="anonymous"}=req.query;
    req.session.name=name;
    console.log(name);
    req.flash("success","user registered success");
    res.redirect("/hello")
});

app.get("/hello",(req,res)=>{
    res.locals.successmsg=req.flash("success");
    res.render("page.ejs",{ name :req.session.name });
});




// app.get("/session",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count=1;
//     }
//     res.send(`requests are ${req.session.count}times`)
// })

// app.get("/test",(req,res)=>{
//     res.send("test done");
// });


app.listen(3000, () => {
console.log("server is listening to 3000")
});