const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const clearCompleted = document.querySelector("#clear-completed");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    if (todo.completed) {
      li.classList.add("completed");
    }
    if (todo.title) {
      li.innerHTML = `
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="todo-${index}" ${
        todo.completed ? "checked" : ""
      }>
          <label class="form-check-label" for="todo-${index}">${
        todo.title
      }</label>
        </div>
        <button type="button" class="btn btn-danger btn-sm float-end delete-button" data-index="${index}">Delete</button>
      `;
    }
    todoList.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = todoInput.value.trim();
  if (!title) return;
  todos.push({ title, completed: false });
  saveTodos();
  renderTodos();
  todoInput.value = "";
});

todoList.addEventListener("change", (e) => {
  if (!e.target.matches('input[type="checkbox"]')) return;
  const index = Number(e.target.id.split("-")[1]);
  todos[index].completed = e.target.checked;
  saveTodos();
  renderTodos();
});

todoList.addEventListener("click", (e) => {
  if (!e.target.matches(".delete-button")) return;
  const index = Number(e.target.dataset.index);
  todos.splice(index, 1);
  saveTodos();
  renderTodos();
});

clearCompleted.addEventListener("click", () => {
  todos = todos.filter((todo) => !todo.completed);
  saveTodos();
  renderTodos();
});

renderTodos();
