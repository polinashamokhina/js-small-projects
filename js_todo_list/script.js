const addButton = document.querySelector("#addTaskBtn");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList"); // object and not an array
let allTasks = [];

window.onload = render_tasks();

function render_tasks(){
    if (!localStorage.getItem("tasks")){
        localStorage.setItem("tasks", JSON.stringify(allTasks));
    }
    else {
        allTasks = JSON.parse(localStorage.getItem("tasks"));
    }

    for (let i = 0; i < allTasks.length; i++) {
        printTask(allTasks[i], i+1); 
      }

    console.log(allTasks);
}

function delete_task(li_elem, task){
    allTasks = allTasks.filter(x => x !== task);
    localStorage.setItem("tasks", JSON.stringify(allTasks));
    document.getElementById("taskList").innerHTML = "";
    
    render_tasks();
};

function printTask(task, number){
    const li_elem = document.createElement("li");

    const deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", () => delete_task(li_elem, task));
    
    li_elem.innerText = number + ". " + task;
    deleteButton.innerText = "Delete";

    li_elem.classList.add("task-item");
    deleteButton.classList.add("delete-btn");

    li_elem.appendChild(deleteButton);
    taskList.appendChild(li_elem);

};

addButton.addEventListener("click", function(){

    printTask(taskInput.value, allTasks.length+1);

    allTasks.push(taskInput.value);
    localStorage.setItem("tasks", JSON.stringify(allTasks));
    
    console.log("end of function");
})