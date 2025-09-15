function printHello(){
    console.log("button clicked");
}
function saybye(){
    console.log("See youu");
}


export default function Button(){
    return(
        <div>
            <button onClick={printHello}>Click me</button>
            <p onMouseOver={saybye}>click event demo</p>
        </div>
    )
}