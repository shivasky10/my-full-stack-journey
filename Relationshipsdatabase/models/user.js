const mongoose=require("mongoose");
const {Schema}=mongoose;

main().then(()=>{console.log("connection successful")}).catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userschema = new Schema({
    username:String,
    addresses:[
        {
            _id:false,
            location:String,
            city:String,
        }
    ]
});

const User = mongoose.model("User",userschema);

const addUsers = async()=>{
    let user1 = new User({
        username :"Ram",
        addresses:[{
            location:"shivaji street",
            city:"hyderabad"
        }]
    })
    user1.addresses.push({location : "12E colony",city:"hyderabad"});
    let result=await user1.save();
    console.log(result);
}

addUsers();