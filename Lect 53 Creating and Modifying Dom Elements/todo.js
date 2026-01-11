document.addEventListener("DOMContentLoaded", () => {
  const todoInp = document.getElementById("todo-input");

  const addTodoBtn = document.getElementById("add-todo-btn");

  const todoList = document.getElementById("todo-list");

  addTodoBtn.addEventListener("click", () => {
    const todoText = todoInp.value;
    if (todoText.length !== 0) {
      const todo = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "todo-checkbox";

      const span = document.createElement("span");
      span.className = "todo-text";
      span.innerText = todoText;

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.innerText = "Delete";

      // <li>
      //     <input type="checkbox" class="todo-checkbox">
      //     <span class="todo-text">Sample To-do Item</span>
      //     <button class="delete-btn">Delete</button>
      // </li>

      todo.appendChild(checkbox);
      todo.appendChild(span);
      todo.appendChild(deleteBtn);

      todoList.append(todo);

      todoInp.value = "";
    } else {
      alert("Todo cannot be empty");
    }
  });

  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const li = e.target.parentElement;
      li.remove();
    });
  });

});
