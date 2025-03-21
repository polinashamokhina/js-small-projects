const addButton = document.querySelector("#addTaskBtn");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

addButton.addEventListener("click", function(){
    const li_elem = document.createElement("li");
    li_elem.innerText = taskInput.value;
    taskList.appendChild(li_elem);
    console.log("end of function");
})