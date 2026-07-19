let todo = [];
let command = prompt("Enter your command...");
while (true){
    if(command == "quit"){
        console.log("Quiiting the application!");
        break;
    }

    if (command == "list"){
        console.log("--------------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("---------------------");
    }
    if(command == "add"){
        let addtask = prompt("Enter the task to add: ");
        todo.push(addtask);
        console.log("task added succesfully...");
    }

    if(command == "delete"){
        let dltTask = prompt("Enter task index to delete the task..");
        todo.splice(dltTask, 1);
        console.log("task removed successfully...");
 
    }

    command = prompt("Enter your command...");
}