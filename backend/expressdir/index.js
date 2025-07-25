const express = require("express");

const app = express();

let port = 3000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

app.get("/" ,(req , res ) =>{
    res.send("this is home page");
})

// app.get("/pages",(req,res)=>{
//     res.send("pages section");
// })

// app.post("/",(req,res)=>{
//     res.send("post req");
// })

// app.use((req , res)=>{
//     console.log("req received");
//     res.send({
//         name : "shiva",
//         age : 20,
//     });
// })

// app.get("/:username",(req,res)=>{
//     console.log(req.params);
//     res.send("hello ");
// });

app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("query request sent");
})