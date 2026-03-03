const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoComplete = document.querySelector('.todo-completed');

const toDoData = JSON.parse(localStorage.getItem('todos')) || [];


window.onload = function () {
  render()
};

const render = function () {
  todoList.innerHTML = '';
  todoComplete.innerHTML = '';

  toDoData.forEach(function (item, index) {
    const li = document.createElement('li');
    li.classList.add('todo-item');

    li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
      '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
      '</div>';

    item.completed ? todoComplete.append(li) : todoList.append(li);

    li.querySelector('.todo-complete').addEventListener('click', function () {
      item.completed = !item.completed;
      render();
    })

    li.querySelector('.todo-remove').addEventListener('click', function () {
      toDoData.splice(index, 1);
      render();
    })
  })
  localStorage.setItem('todos', JSON.stringify(toDoData));
}

todoControl.addEventListener('submit', function (event) {
  event.preventDefault();

  if (!headerInput.value) return;

  const newTodo = {
    text: headerInput.value,
    completed: false,
  }

  toDoData.push(newTodo);
  headerInput.value = '';

  render();
})