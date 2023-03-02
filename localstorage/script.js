const inputEl = document.querySelector('#input');
const buttonEl = document.querySelector('#delete');
const outputEl = document.querySelector('#list-container');
const form = document.querySelector('form');

// Remove Todo
const clearTodo = (id) => {
  console.log(id);
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos', todos));
  }
  todos = todos.filter((todo) => todo.id !== Number(id));
  localStorage.setItem('todos', JSON.stringify(todos));
  getTodos();
};

//Add todo and save it into local storage
// Get todos
const getTodos = () => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  // Display to DOM
  let output;
  const allTodos = todos.map((todo) => {
    return `
          <li id="item">
            <span>${todo.title}</span>
            <button id="delete" onclick="clearTodo('${todo.id}')" }>X</button>
          </li>
    `;
  });
  output = allTodos.join('');
  outputEl.innerHTML = output;
};

getTodos();

const addTodo = (e) => {
  e.preventDefault();
  // Check if input value is empty first, then get it to todo
  const todoInput =
    inputEl.value === '' ? alert('Please enter a task') : inputEl.value;
  // Check if localStorage has todos
  if (todoInput) {
    let todos;
    if (localStorage.getItem('todos') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.unshift({ id: Date.now(), title: todoInput });
    // Save to local Storage
    localStorage.setItem('todos', JSON.stringify(todos));
    inputEl.value = ''; // empty input
  }
  getTodos();
};

//localStorage.removeItem('name');

form.addEventListener('submit', addTodo);
