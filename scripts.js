function addTask() {
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(span);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        newTaskInput.value = '';
    }
}
