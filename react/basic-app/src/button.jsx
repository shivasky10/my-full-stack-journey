function printHello(event){
    // event.preventDefault();
    console.log("button clicked");
}
function saybye(){
    console.log("See youu");
}


export default function Button(){
    return(
        <form onSubmit={printHello}>
            <button>Click me</button>  
        </form>
    )
}