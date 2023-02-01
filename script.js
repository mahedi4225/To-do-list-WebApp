const form = document.querySelector('form');
const input = document.querySelector('#task');
const todoList = document.querySelector('#todo-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask(input.value);
  input.value = '';
});

function addTask(task) {
  const li = document.createElement('li');
  li.innerHTML = `
    ${task}
    <button class="delete-button">Delete</button>
  `;
  todoList.appendChild(li);
  const deleteButton = li.querySelector('.delete-button');
  deleteButton.addEventListener('click', () => {
    li.remove();
  });
}
