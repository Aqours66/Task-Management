function addTask() {
    var taskTitle = document.getElementById('taskTitle').value;
    var taskDescription = document.getElementById('taskDescription').value;
    var taskDueDate = document.getElementById('taskDueDate').value;
    var taskPriority = document.getElementById('taskPriority').value;
    var taskProject = document.getElementById('taskProject').value;

    if (taskTitle.trim() !== '') {
        var taskList = document.getElementById('taskList');
        var newTaskItem = document.createElement('li');
        newTaskItem.classList.add('task-item');

        newTaskItem.innerHTML = `
            <span class="task-detail">Task Title: ${taskTitle}</span>
            <span class="task-detail">Description: ${taskDescription}</span>
            <span class="task-detail">Due Date: ${taskDueDate}</span>
            <span class="task-detail">Priority: ${taskPriority}</span>
            <span class="task-detail">Project: ${taskProject}</span>
            <select class="task-status">
                <option value="not-started" >Not Started</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <button class="remove-button" onclick="removeTask(this)">Remove</button>
        `;

        taskList.appendChild(newTaskItem);

        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDescription').value = '';
        document.getElementById('taskDueDate').value = '';
        document.getElementById('taskProject').value = '';
    }
}


function removeTask(button) {
    var taskItem = button.parentElement;
    taskItem.remove();
}


function filterTasks() {
    var filterStatus = document.getElementById('filterStatus').value;
    var tasks = document.querySelectorAll('#taskList li');

    tasks.forEach(function(task) {
        var status = task.querySelector('#taskStatus').value;
        if (filterStatus === 'all' || status === filterStatus) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}

function searchTasks() {
    var searchKeyword = document.getElementById('searchTask').value.toLowerCase();
    var tasks = document.querySelectorAll('#taskList li');

    tasks.forEach(function(task) {
        var taskTitle = task.querySelector('span:first-child').innerText.toLowerCase();

        if (taskTitle.includes(searchKeyword)) {
            task.style.display = 'block';
            task.classList.add('searched');
        } else {
            task.style.display = 'none';
            task.classList.remove('searched');
        }
    });
}


function clearSearch() {
    var tasks = document.querySelectorAll('#taskList li');

    tasks.forEach(function(task) {
        task.style.display = 'block';
        task.classList.remove('searched');
    });

    document.getElementById('searchTask').value = '';
}