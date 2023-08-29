//Variables

const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

//Event listener for add button

addTask.addEventListener("click", function () {
  if (inputTask.value === "") {
    alert("Please enter a task");
  } else {
    let task = document.createElement("div");
    task.classList.add("task");

    let li = document.createElement("li");
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add("checkTask");
    task.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add("deleteTask");
    task.appendChild(deleteButton);
    taskContainer.appendChild(task);
  }

  inputTask.value = "";
});
taskContainer.addEventListener("click", function (e) {
  let target = e.target;
  if (target.classList.contains("deleteTask")) {
    target.parentElement.remove();
  } else if (target.classList.contains("checkTask")) {
    target.parentElement.style.textDecoration = "line-through";
  }
});
