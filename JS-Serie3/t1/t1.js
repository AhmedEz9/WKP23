// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

document.addEventListener('DOMContentLoaded', function () {
  const todoListContainer = document.getElementById('todo-list');

  todoList.forEach(function (todoItem) {
    const listItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'todo-' + todoItem.id;
    checkbox.checked = todoItem.completed;

    const label = document.createElement('label');
    label.htmlFor = 'todo-' + todoItem.id;
    label.textContent = todoItem.task;

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    todoListContainer.insertAdjacentHTML('beforeend', listItem.outerHTML);
  });
});
