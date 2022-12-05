let form = document.getElementById('form');
let input = document.getElementById("input");
let todos = document.getElementById("todos");

let todoData = [];
function addTodo(todoText) {
  todoData.push(todoText);
  let todoItem = document.createElement("li");
  todoItem.innerHTML = todoText;
  todos.appendChild(todoItem);
}
form.onsubmit = (event) => {
  event.preventDefault();
  addTodo(input.value);
  input.value = "";
};
