const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const newTask = document.createElement("li");

    const taskContent = document.createElement("div");
    taskContent.classList.add("task-content");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskText = document.createElement("span");
    taskText.textContent = taskInput.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";

    deleteButton.addEventListener("click", function () {
      newTask.remove();
    });

    checkbox.addEventListener("change", function () {
      newTask.classList.toggle("completed");
    });

    taskContent.appendChild(checkbox);
    taskContent.appendChild(taskText);

    newTask.appendChild(taskContent);
    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);

    taskInput.value = "";
  }
});
