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

  function updateTodoList(id, completed) {
    const index = todoList.findIndex(item => item.id === id);
    if (index !== -1) {
      todoList[index].completed = completed;
      console.log('Updated todoList:', todoList);
    }
  }

  function removeTodoItem(id) {
    const index = todoList.findIndex(item => item.id === id);
    if (index !== -1) {
      todoList.splice(index, 1);
      console.log('Updated todoList:', todoList);
    }
  }

  const addItemBtn = document.querySelector('.add-btn');
  const dialog = document.querySelector('dialog');
  const form = dialog.querySelector('form');
  const input = form.querySelector('input');

  function addTodoItem(task) {
    const newItem = {
      id: todoList.length + 1,
      task,
      completed: false,
    };

    todoList.push(newItem);
    console.log('Updated todoList:', todoList);
  }

  addItemBtn.addEventListener('click', () => dialog.showModal());

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (input.value.trim()) {
      addTodoItem(input.value.trim());
      input.value = '';
      dialog.close();
    }
  });

  todoList.forEach(function (todoItem) {
    const listItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'todo-' + todoItem.id;
    checkbox.checked = todoItem.completed;

    checkbox.addEventListener('change', function () {
      updateTodoList(todoItem.id, checkbox.checked);
    });

    const label = document.createElement('label');
    label.htmlFor = 'todo-' + todoItem.id;
    label.textContent = todoItem.task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function () {
      removeTodoItem(todoItem.id);
      todoListContainer.removeChild(listItem);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    todoListContainer.appendChild(listItem);
  });
});
