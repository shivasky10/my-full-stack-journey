const mongoose = require('mongoose');

main().then(()=>{
    console.log("connection succcesful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amzon');
}

const bookSchema = new mongoose.Schema({
    title : { 
        type: String,
        required: true,
        // required is like not null in sql 
    },  
    // this is original form to write
    author : String,  
    // thsi is shortcut to write
    price : Number,
});

const Book = mongoose.model("Book",bookSchema);

let book1 = new Book({
    title : "hello sky",
    author:"shiva",
    price :999,
});

book1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});
