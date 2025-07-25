const mongoose = require('mongoose');

main().then(()=>{
    console.log("connection succcesful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  age :Number,
});

const User = mongoose.model("User",userSchema);
// here user is class and user is collection name and userschema is schema to user collection

User.updateMany({age:{$gt:19}},{age:21}).then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
});

// User.findOne({ age :{$gte:20}}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });

// User.insertMany([
//   {name:"ram",email:"abcd@gmail.com",age:21},
//   {name:"joe",email:"joe@gmail.com",age:19},

// ]).then((res)=>{
//   console.log(res);
// });


// const user1 = new User({
//   name :"shiva",
//   email:"shiva@gmail.com",
//   age:20,
// });

// user1.save().then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });