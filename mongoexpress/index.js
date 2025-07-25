const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded ({extended : true}));
app.use(methodOverride("_method"));

main().then(()=>{
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.get("/chats", async (req,res)=>{
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});

// create route
app.post("/chats",(req,res)=>{
    let {from,msg,to} = req.body;
    // this data received needed to be parsed to we use urlencodedd above 
    let newchat = new Chat({
        from : from,
        msg : msg,
        to : to,
        created : new Date(),
    });
    newchat.save().then((res)=>{
        console.log("chat saved");
    }).catch((err)=>{console.log(err)});
    res.redirect("/chats");
});

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

app.get("/",(req,res)=>{
    res.send("root page");
});

// new route
app.get("/chats/:id/new", async (req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
});


app.put("/chats/:id", async (req,res)=>{
    let {id} = req.params;
    let {msg : newmsg} = req.body;
    let updchat = await Chat.findByIdAndUpdate(id,{msg : newmsg}, {runValidators :true , new : true});
    res.redirect("/chats");
});

app.delete("/chats/:id",async (req,res)=>{
        let {id} = req.params;
        let delchat = await Chat.findByIdAndDelete(id);
        console.log(delchat);
        res.redirect("/chats");

});






app.listen(3000,(req,res)=>{
    console.log("listening on 3000");
});


// const chat1 = new Chat({
//     from : "shiva",
//     to : "sky",
//     msg : " hey hello haiiiiii....",
//     created : new Date(),
//     // date() is built in js function that creates a random date and time ,
// });

// chat1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });
