import Product from "./Product.jsx"

function ProductTab(){
    let styles = {
        display : "flex",
        flexWrap : "wrap",
        justifyContent : "center",
        alignItems : "center",
    };
    return(
    <div style={styles}>
    <Product title="Apple airpods (3rd gen)" idx={0}/>
    <Product title="Samsung S25 Ultra" idx={1}/>
    <Product title =" Zebronics Keyboard" idx={2}/>
    <Product title="Logitech Mouse" idx={3}/>
    </div> 
    );
    
}

export default ProductTab;