const input = document.querySelector("input"),
btn = document.querySelector("button"),
toDoList = document.querySelector(".todo-list"),
clear = document.querySelector(".clear");

// add list item

const addTask = () => {
    // e.preventDefault();
    const newLi = document.createElement("li");
    const delBtn = document.createElement("button");

    delBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;

    if(input.value !== "") {
        newLi.textContent= input.value;
        newLi.appendChild(delBtn);
        toDoList.appendChild(newLi);
        input.value = "";
    }else{
        alert("PLease enter a task")
    }

    //delete function

    delBtn.addEventListener("click", function() {
        const del = confirm("You are about to delete this task!!!");
        if(del){
            const parent = this.parentNode;
            parent.remove();
        }
    })
}

btn.addEventListener("click", addTask)

clear.addEventListener("click",()=> {
    toDoList.innerHTML = "";
} )