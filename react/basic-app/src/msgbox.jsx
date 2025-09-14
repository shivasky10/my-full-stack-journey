export default function Msgbox({username , textcolor}){
    let styling = { color: textcolor}
    return(
        <h1 style={styling}>{username}</h1>
    );
}