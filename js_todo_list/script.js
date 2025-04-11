const addButton = document.querySelector("#addTaskBtn");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList"); // object and not an array
let allTasks = [];

window.onload = function(){ // обьект окно, запускаем нашу функцию при загрузке страницы
    // проверить есть ли уже что тоб а если есть - парсимб а если нет - то создать ключ, 

    if (!localStorage.getItem("tasks")){
        localStorage.setItem("tasks", JSON.stringify(allTasks));
    }
    else {
        allTasks = JSON.parse(localStorage.getItem("tasks"));
    }

    for (let i = 0; i < allTasks.length; i++) {
        printTask(allTasks[i], i); 
      }

    console.log(allTasks);

}; 

function printTask(task, index){
    const li_elem = document.createElement("li");

    const deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", function(){
        allTasks = allTasks.filter(x => x !== task);
        console.log(allTasks, task);
        localStorage.setItem("tasks", JSON.stringify(allTasks));
        taskList.removeChild(li_elem);
    });
    
    li_elem.innerText = task;
    deleteButton.innerText = "Delete";

    li_elem.classList.add("task-item");
    deleteButton.classList.add("delete-btn");

    li_elem.appendChild(deleteButton);
    taskList.appendChild(li_elem);

};

addButton.addEventListener("click", function(){

    i = allTasks.length + 1
    task = i + ". " + taskInput.value
    printTask(task, i-1);

    allTasks.push(taskInput.value);
    localStorage.setItem("tasks", JSON.stringify(allTasks));
    
    console.log("end of function");
})