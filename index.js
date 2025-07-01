function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    const taskList = document.getElementById('taskList');

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;
    li.addEventListener('click', () => {
        li.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "15px";
    deleteButton.onclick = (e) => {
        e.stopPropagation();
        taskList.removeChild(li);
    };
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
}