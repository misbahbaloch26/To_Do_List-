import inquirer from "inquirer"


let todos:string[] = [];
let condition = true;



while(condition){
    let ans:any = await inquirer.prompt(
        [
            {
                name: "select",
                type: "list",
                message: "select an operator",
                choices: ["add" , "update" , "reveiw" , "delete" , "exit"],
            }
        ]
    );






    if(ans.select === "add"){
        let addtodo:any = await inquirer.prompt(
                {
                    name: "todo",
                    type: "input",
                    message: "what you want to add in your todos?",
                    validate: function (input){
                        if (input.trim() == ""){
                            return "please enter a non-empty item"
                        }
                    }
                }  
        )

    if(addtodo.todo.trim() !== ""){
      todos.push(addtodo.todo)
      console.log(todos);
      }
    }





    if(ans.select === "update"){
        let updateTodo = await inquirer.prompt(
            [
                {
                    name: "todo",
                    type: "list",
                    choices: todos.map(item => item),
                    message: "select the item you want to update",
                }
            ]
        )
        let addtodo = await inquirer.prompt(
            [
                {
                    name: "todo",
                    type: "input",
                    message: "add the new item?"
                }
            ]
        )
         let newTodo = todos.filter(val => val !== updateTodo.todo );
         todos = [...newTodo ,addtodo.todo];
         console.log(todos);   
    }







    if(ans.select === "reveiw"){
        console.log("...**TO-DO-LIST**...");
        console.log(todos);   
    }





    if(ans.select === "delete"){
        let deleteTodo = await inquirer.prompt(
            [
                {
                    name: "todo",
                    type: "list",
                    choices: todos.map(item => item),
                    message: "select the item you want to delete",
                }
            ]
        )
        let newTodo = todos.filter(val => val !== deleteTodo.todo );
        todos = [...newTodo ];
        console.log(todos); 
    }




    if(ans.select === "exit"){
        console.log("GOOD BYE");
        condition = false;
    }


}
