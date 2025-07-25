const express=require("express");
const app = express();

// --------middlewares --------------

app.use((req,res,next)=>{
    console.log("iam 1st middleware");
    next()
});


app.use("/api",(req,res,next)=>{
    const {token}=req.query;
    if(token=="giveaccess"){
        next();
    }
    res.send("access denied");
})
app.use("/api",(req,res)=>{
    res.send("data");
})
// app.use((req,res,next)=>{
//     console.log("iam 2nd middleware");
//     next()
// });

// logger--------------
// app.use((req,res)=>{
//     req.time=new Date(Date.now()).toString();
//     console.log(req.method , req.path,req.time)
// })

app.get("/",(req,res)=>{
    res.send("iam root")
})

app.listen(8080,()=>{
    console.log("listening on port 8080");
});