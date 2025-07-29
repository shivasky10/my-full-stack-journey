const express=require("express");
const app = express();
const ExpressError=require("./ExpressError")

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
    throw new ExpressError(401,"Access denied");
})
app.use("/api",(req,res)=>{
    res.send("data");
})


app.use("/err",(req,res)=>{
    abcd=abcd;
})

app.use((err,req,res,next)=>{
    let{status=500,message="some error occured"}=err;
    res.status(status).send(message);
})


app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"access denied to admin");
});
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

app.use((err ,req,res,next)=>{
    console.log("---error---")
})

app.listen(8080,()=>{
    console.log("listening on port 8080");
});