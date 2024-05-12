let todos = [];

function addTodo(event) {
  event.preventDefault();
  const title = document.getElementById('todoTitle').value.trim();
  if (title) {
    todos.push({ title, complete: false });
    document.getElementById('todoTitle').value = '';
    renderTodos();
  }
}

function renderTodos() {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const todoItem = document.createElement('div');
    todoItem.className = 'ui segment';
    todoItem.innerHTML = `
      <p class="ui big header">${index + 1} | ${todo.title}</p>
      ${todo.complete ? '<span class="ui green label">Complete</span>' : '<span class="ui gray label">Not Complete</span>'}
      <a class="ui red button" onclick="deleteTodo(${index})">Delete</a>
    `;
    todoList.appendChild(todoItem);
  });
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}