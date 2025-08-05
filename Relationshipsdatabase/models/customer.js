const mongoose=require("mongoose");
const {Schema}=mongoose;

main().then(()=>{console.log("connection successful")}).catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item:String,
    price:Number,
});

const customerSchema = new Schema({
     name :String,
     Orders :[
    {
        type : Schema.Types.ObjectId,
        ref:"order"
    }]
});

customerSchema.post("findOneAndDelete",async(customer)=>{
    if(customer.Orders.length){
        let res=await Order.deleteMany({_id: { $in: customer.Orders}});
        console.log(res);
    }
});



const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);

const addCustomer = async()=>{
    let customer1 = new Customer({
        name :"shiva",
    });

    let order1 =await Order.findOne({item:"chips"});
    let order2 =await Order.findOne({item:"chocolate"});

    customer1.Orders.push(order1);
    customer1.Orders.push(order2);

    let result= await customer1.save();
    console.log(result);
}

// addCustomer();

// const addorders = async()=>{
//     let res =await Order.insertMany([
//         {item:"samosa",price:15},
//         {item:"chips",price:10},
//         {item:"chocolate",price:40}
//     ]);
//     console.log(res);
// };

// addorders();

// adding a customer

const addCust = async()=>{
    let newCust = new Customer({
        name:"rajuu"
    });

    let newOrder = new Order({
        item:"juice",
        price:300

    });

    newCust.Orders.push(newOrder)

    await newOrder.save();
    await newCust.save();
    console.log("added customer");
}


// #deleting customer

const delCust = async ()=>{
    let data = await Customer.findByIdAndDelete("6891bc37ecb72413430d66a7");
    console.log(data)
}
// addCust();
delCust();