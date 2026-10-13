document.addEventListener('DOMContentLoaded', () => {
    // Управление задачами
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Управление привычками
    const habitInput = document.getElementById('habitInput');
    const addHabitBtn = document.getElementById('addHabitBtn');
    const habitList = document.getElementById('habitList');

    // Функция добавления задачи
    function addTask() {
        const text = taskInput.value.trim();
        if (!text) return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${text}</span>
            <div>
                <button class="complete-btn" style="background:#10b981; padding:4px 8px; font-size:12px; margin-right:4px;">Готово</button>
                <button class="delete-btn">Удалить</button>
            </div>
        `;

        li.querySelector('.complete-btn').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = '';
    }

    // Функция добавления привычки
    function addHabit() {
        const text = habitInput.value.trim();
        if (!text) return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${text}</span>
            <div>
                <button class="complete-btn" style="background:#10b981; padding:4px 8px; font-size:12px; margin-right:4px;">Выполнено</button>
                <button class="delete-btn">Удалить</button>
            </div>
        `;

        li.querySelector('.complete-btn').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });

        habitList.appendChild(li);
        habitInput.value = '';
    }

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });

    addHabitBtn.addEventListener('click', addHabit);
    habitInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addHabit();
    });
});