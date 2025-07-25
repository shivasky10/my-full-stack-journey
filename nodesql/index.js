const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'skyapp',
  password : "Shivasky@10"
});

app.get("/",(req,res)=>{
    let q ="select count(*) from user";
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs",{count});
        });
    } catch(err){
        res.send("error in DB");
    }
   
});

app.get("/user",(req,res)=>{
    let q = "select * from user";
    try{
        connection.query(q,(err,users)=>{
            if(err) throw err;
           res.render("showuser.ejs",{users});
        });
    } catch(err){
        res.send("error in DB");
    }
});

//edit route
app.get("/user/:id/edit",(req,res)=>{
    let {id}= req.params;
    let q = `select * from user where id = '${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
           let user = result[0];
           console.log(user);
           res.render("edit.ejs",{user});
        });
    } catch(err){
        res.send("error in DB");
    }
    
});

app.patch("/user/:id",(req,res)=>{
     let {id}= req.params;
     let { username : formusername , password : newpass} = req.body;
     console.log(req.body);
    let q = `select * from user where id = '${id}'`;
    try{
        connection.query(q,(err,result)=>{
        if(err) throw err;
           let user = result[0];
           if(newpass!= user.password){
                res.send("wrong password");
            } else {
                let q1 = `UPDATE user SET username='${formusername}' where id='${id}'`;
                connection.query(q1,(err,result)=>{
                    if(err) throw err;
                    res.redirect("/home");
                });

            }
        });
    } catch(err){
        res.send("error in DB");
    }
});






app.listen("5000",(req,res)=>{
    console.log("port running at 5000 ");
});


// let q ="insert into user ( id,username,email,password)values ?";
// let usr=[];
// for(let i=1;i<=50;i++){
//     usr.push(getRandomUser());
// }



// try{
//     connection.query(q,[usr],(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     });
// } catch(err){
//     console.log(err);
// }

// connection.end();

// let getRandomUser = ()=> {
//   return [
//     faker.string.uuid(),
//     faker.internet.username(), // before version 9.1.0, use userName()
//     faker.internet.email(),
//     faker.internet.password(),
// ];
// };


