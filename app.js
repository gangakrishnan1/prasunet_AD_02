document.getElementById("task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const newTask = document.getElementById("new-task").value;
    if (newTask === "") return;
    addTask(newTask);
    document.getElementById("new-task").value = "";
  });
  
  function addTask(task) {
    const taskList = document.getElementById("task-list");
    const li = document.createElement("li");
    li.innerHTML = `<span>${task}</span> <button class="edit">Edit</button> <button class="delete">Delete</button>`;
    taskList.appendChild(li);
    editTask(li.firstElementChild, task);
    deleteTask(li);
  }
  
  function editTask(task, originalTask) {
    const editButton = task.parentElement.querySelector(".edit");
    editButton.addEventListener("click", function() {
      const newTask = prompt("Enter a new task", originalTask.textContent);
      if (newTask === null || newTask === "") return;
      task.textContent = newTask;
      originalTask.textContent = newTask;
    });
  }
  
  function deleteTask(task) {
    const deleteButton = task.querySelector(".delete");
    deleteButton.addEventListener("click", function() {
      task.remove();
    });
  }