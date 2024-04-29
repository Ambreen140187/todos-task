import inquirer from "inquirer";
let todos=[];
let condition=true;
while(condition){
    let todoQuestion=await inquirer.prompt([

        {
            name:"firstqustion",
            type:"input",
            message:"what whould to add todo list?",
            
        },
        {
            name:"secondqustion",
            type:"confirm",
            message:" whould you add more todolist :",
            default:true,
        }
    ]);
    todos.push(todoQuestion.firstqustion)
    console.log(todos)
    condition=todoQuestion.secondqustion
}