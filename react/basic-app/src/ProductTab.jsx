import Product from "./Product.jsx"

function ProductTab(){
    let items=["fast","durable","hitech"];
    return(
    <>
    <Product title="mobile" price={20000}/>
    <Product title="laptop" price={50000}/>
    <Product title="pen"/>
    </> 
    );
    
}

export default ProductTab;