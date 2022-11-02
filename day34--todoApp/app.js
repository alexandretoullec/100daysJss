const input = document.querySelector("input"),
btn = document.querySelector("button"),
toDoList = document.querySelector(".todo-list"),
clear = document.querySelector(".clear");



btn.addEventListener("click", addTask);

function addTask() {
    if(input.value !== "") {
        addTaskToLS();
        displayTask();

    }else{
        alert("PLease enter a task")
    }
}

// Save task to locale storage

// get tasks from the local storage

let tasks;

function getTask() {
    
    if (localStorage.getItem("tasks")=== null) {
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }
}

function addTaskToLS() {
    getTask()
    tasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
}

function displayTask() {
    getTask();
}