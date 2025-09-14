import "./product.css"
import Price from "./Price";

function Product({title,idx}){
    // let styling = {backgroundColor : price >40000 ? "red" : null}
    // condition based styling or dynamic comp styling
    let oldprices = ["40,000","90,000","5000","3000"];
    let newprices = ["34,000","78,000","3000","2000"];
    let description =[["Active noise Cancellation","new Gen"],["100x Zoom","S Pen"],["Wireless keyboard","faster"],["Smooth","3000 DPI"]]
    return (
        <div className="product">
            <h3>{title}</h3>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldprice={oldprices[idx]} newprice={newprices[idx]}/>
        </div>
    );
}

export default Product;