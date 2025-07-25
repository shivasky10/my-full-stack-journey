const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main().then(()=>{
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats = [
    {
    from : "ram",
    to : "sai",
    msg : " msg 2 ",
    created : new Date(),
    },
    {
    from : "joe",
    to : "heri",
    msg : " message 3",
    created : new Date(),
    },
     {
    from : "sam",
    to : "tim",
    msg : " msg 4444",
    created : new Date(),
    }, {
    from : "leo",
    to : "hob",
    msg : " message 5",
    created : new Date(),
    },
]

Chat.insertMany(allchats).then((res)=>{
    console.log(res);
});