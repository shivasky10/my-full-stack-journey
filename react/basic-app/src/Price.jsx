export default function Price({oldprice,newprice}){
    let oldstyle = {
        textDecorationLine : "line-through",
    }
    let newstyle ={
        fontWeight : "bold",
    }
    let styles ={
        backgroundColor : "yellow",
        height : "25px",
        width :"200px",
        borderBottomLeftRadius : "10px",
        borderBottomRightRadius : "10px",
    }
    return(
        <div style={styles}>
            <span style={oldstyle}>{oldprice}</span>
            &nbsp;&nbsp;
            <span style={newstyle}>{newprice}</span>
        </div>
    );
}