import "./product.css"

function Product({title,price=10,features}){
    let styling = {backgroundColor : price >40000 ? "red" : null}
    // condition based styling or dynamic comp styling
    return (
        <div className="product" style={styling}>
            {/* we use style to add styling in jsx */}
            <h3>{title}</h3>
            <p>Price is : {price}</p>
            {price>40000 ? <p>Discount of 5%</p>:null}
        </div>
    );
}

export default Product;