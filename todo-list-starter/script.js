let todoTaskText = [];
let todoTaskStatus = [];
let todoList = document.getElementById("todo-list");

function addTask() {
    let newTask = document.getElementById("new-task-text");
    if (newTask.value) {
        todoTaskText.push(newTask.value);
        todoTaskStatus.push(false);
        newTask.value = "";
        updateTodoList();
    }
}

function updateTodoList() {
    let todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    todoTaskText.forEach((task, index) => {
        let newTodoTaskElement = createNewTodoItemElement(task, index);
        todoList.appendChild(newTodoTaskElement);
      });
}

function createNewTodoItemElement(task, index) {
  let newTodoTaskTextElement = document.createElement("p");
  newTodoTaskTextElement.innerText = task;

  if (todoTaskStatus[index] == true) {
    newTodoTaskTextElement.classList.add("complete");
  }

  let newTodoTaskElement = document.createElement("li");
  newTodoTaskElement.appendChild(newTodoTaskTextElement);

  let completeButtonElement = document.createElement("input");
  completeButtonElement.type = "button";
  completeButtonElement.value = "Completed";
  completeButtonElement.onclick = function () {
    toggleComplete(index);
  };
  newTodoTaskElement.appendChild(completeButtonElement);

  todoList.appendChild(newTodoTaskElement);
  return newTodoTaskElement;
}

function toggleComplete(index) {
  // If the to do is not complete
  if (todoTaskStatus[index] == false) {
    // Set the todo to complete
    todoTaskStatus[index] = true;
  } else {
    // Else the todo is already complete so set it to incomplete
    todoTaskStatus[index] = false;
  }
  updateTodoList();
}

updateTodoList();

