 // Wait for the page to fully load
window.onload = function() {
    // Get DOM elements
    const taskInput = document.querySelector('.task-input');
    const addButton = document.querySelector('.add-button');
    const taskList = document.querySelector('.task-list');
    const taskCount = document.querySelector('.task-count');
    const clearCompletedBtn = document.querySelector('.clear-completed');
    const emptyListMessage = document.querySelector('.empty-list');
    const aboutToggle = document.querySelector('.about-toggle');
    const aboutUsSection = document.querySelector('.about-us');
    
    // Toggle About Us section
    aboutToggle.addEventListener('click', function() {
        aboutUsSection.classList.toggle('hidden');
        aboutToggle.textContent = aboutUsSection.classList.contains('hidden') ? 'About Us' : 'Hide About Us';
    });
    
    // Load tasks from localStorage
    let tasks = [];
    try {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            tasks = JSON.parse(savedTasks);
        }
    } catch (error) {
        console.error('Error loading tasks from localStorage:', error);
        tasks = [];
    }
    
    // Function to save tasks to localStorage
    function saveTasks() {
        try {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        } catch (error) {
            console.error('Error saving tasks to localStorage:', error);
        }
    }
    
    // Function to render tasks
    function renderTasks() {
        // Clear current task list
        taskList.innerHTML = '';
        
        if (!tasks || tasks.length === 0) {
            taskList.appendChild(emptyListMessage);
        } else {
            // Create task elements
            tasks.forEach((task, index) => {
                const taskElement = document.createElement('div');
                taskElement.classList.add('task');
                if (task.completed) {
                    taskElement.classList.add('completed');
                }
                
                taskElement.innerHTML = `
                    <div class="task-content">
                        <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''}>
                        <span class="task-text">${task.text}</span>
                    </div>
                    <button class="delete-btn">×</button>
                `;
                
                // Add event listener for checkbox
                const checkbox = taskElement.querySelector('.checkbox');
                checkbox.addEventListener('change', function() {
                    tasks[index].completed = checkbox.checked;
                    if (checkbox.checked) {
                        taskElement.classList.add('completed');
                    } else {
                        taskElement.classList.remove('completed');
                    }
                    updateTaskCount();
                    saveTasks();
                });
                
                // Add event listener for delete button
                const deleteBtn = taskElement.querySelector('.delete-btn');
                deleteBtn.addEventListener('click', function() {
                    tasks.splice(index, 1);
                    renderTasks();
                    updateTaskCount();
                    saveTasks();
                });
                
                taskList.appendChild(taskElement);
            });
        }
        
        updateTaskCount();
    }
    
    // Function to update task count
    function updateTaskCount() {
        const remainingTasks = tasks.filter(task => !task.completed).length;
        taskCount.textContent = `${remainingTasks} task${remainingTasks !== 1 ? 's' : ''} left`;
    }
    
    // Function to add a new task
    function addTask() {
        const text = taskInput.value.trim();
        if (text) {
            tasks.push({
                text: text,
                completed: false
            });
            taskInput.value = '';
            renderTasks();
            saveTasks();
        }
    }
    
    // Event listener for add button
    addButton.addEventListener('click', addTask);
    
    // Event listener for Enter key
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    
    // Event listener for clear completed button
    clearCompletedBtn.addEventListener('click', function() {
        tasks = tasks.filter(task => !task.completed);
        renderTasks();
        saveTasks();
    });
    
    // Initial render
    renderTasks();
};