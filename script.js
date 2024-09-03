document.getElementById('add-task-button').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskDateTime = document.getElementById('task-date-time');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '' && taskDateTime.value !== '') {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        
        const taskContent = document.createElement('span');
        taskContent.textContent = `${taskInput.value} - ${taskDateTime.value}`;
        
        const taskActions = document.createElement('div');
        taskActions.className = 'task-actions';

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit-button';
        editButton.addEventListener('click', function() {
            taskInput.value = taskContent.textContent.split(' - ')[0];
            taskDateTime.value = taskDateTime.value;
            taskList.removeChild(taskItem);
        });
        taskActions.appendChild(editButton);

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.className = 'complete-button';
        completeButton.addEventListener('click', function() {
            taskItem.classList.toggle('completed');
        });
        taskActions.appendChild(completeButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });
        taskActions.appendChild(deleteButton);

        taskItem.appendChild(taskContent);
        taskItem.appendChild(taskActions);
        taskList.appendChild(taskItem);

        // Clear the input fields
        taskInput.value = '';
        taskDateTime.value = '';
    }
});
