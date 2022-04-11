let todoTaskText = [];
let todoTaskStatus = [];
let todoList = document.getElementById("todo-list");

function addTask() {
    let newTaskText = document.getElementById("new-task-text");
    let newTaskDate = document.getElementById("task-due-date");
    if (newTaskText.value || newTaskDate.value) {
        todoTaskText.push({text:newTaskText.value, date:newTaskDate.value});
        todoTaskStatus.push(false);
        newTaskText.value = "";
        newTaskDate.value = "";
        updateTodoList();
    }
}

function updateTodoList() {
    let todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    todoTaskText.forEach((task, index) => {
        let newTodoTaskElement = createNewTodoItemElement(task.text, task.date, index);
        todoList.appendChild(newTodoTaskElement);
      });
}

function createNewTodoItemElement(task, date, index) {
  let newTodoTaskTextElement = document.createElement("p");
  let newTodoTaskDateElement = document.createElement("p");
  newTodoTaskTextElement.innerText = task;
  newTodoTaskDateElement.innerText = date;

  if (todoTaskStatus[index] == true) {
    newTodoTaskTextElement.classList.add("complete");
  }

  let newTodoTaskElement = document.createElement("li");
  newTodoTaskElement.appendChild(newTodoTaskTextElement);
  newTodoTaskElement.appendChild(newTodoTaskDateElement);

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

