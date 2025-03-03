document.addEventListener("DOMContentLoaded", loadTasks);

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (event) =>{
    if(event.key === "Enter"){
        addTask();
    }
})

function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText === "") return;

    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    taskItem.addEventListener("click", () =>{
        taskItem.classList.toggle("completed");
        saveTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X"; 
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
        saveTasks();
    })

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
    taskInput.value = "";

    saveTasks();
}

function saveTasks(){
    const tasks = [];
    document.querySelectorAll("#taskList li").forEach((task) => {
        tasks.push({
            text: task.firstChild.textContent,
            completed: task.classList.contains("completed"),
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){
    const savedTasks = JSON.parse(localStorage.getItem("tasks"))|| [];

    savedTasks.forEach((task) => {
        const taskItem = document.createElement("li");
        taskItem.textContet = task.text;
        if(task.completed){
            taskItem.classList.add("completed");
        }

        taskItem.addEventListenter("click", () => {
            taskItem.classList.toggle("completed");
            saveTasks();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => {
            taskItem.remove();
            saveTasks();
        })

        taskItem.appendChild(deleteBtn);   
        taskList.appendChild(taskItem);
    })
}