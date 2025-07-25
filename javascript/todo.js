let todo=[];

let req=prompt("enter your choice");

while(true){
    if(req=="quit"){
        console.log("you quit");
        break;
    }

    if(req=="list"){
        console.log("---------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
            }
        console.log("---------------");
    } 
        else if(req=="add"){
        let task=prompt("enter task to add");
        todo.push(task);
        console.log("task added");
        } else if(req=="delete"){
           let idx=prompt("enter idx you want to delete ");
           todo.splice(idx,1);
           console.log("task deleted");
        }else{
            console.log("wrong request");
        }
     

        req=prompt("enter your choice");

}