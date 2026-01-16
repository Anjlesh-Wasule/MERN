document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("ul#item-list").addEventListener("click", (event) => {
    // console.log(event.target);

    if (event.target.closest("button")) {
      console.log("delete button clicked");

      const parent = event.target.closest("button").parentElement;
      parent.remove();
    } else if (event.target.matches("input[type='checkbox']")) {
      const checkbox = event.target;
      const label = checkbox.nextElementSibling;

      if (checkbox.checked) {
        label.style.textDecoration = "line-through";
      } else {
        label.style.textDecoration = "none";
      }
    } else if (event.target.closest("label")) {
      console.log("label clicked");
    }
  });

  const form = document.querySelector("#add-item-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let formData = new FormData(this);
    let newTodo = formData.get("new-todo");
    if(newTodo.trim() === "") return;
    addNewTodo(newTodo);
  });

  function addNewTodo(newTodo) {
    const itemList = document.getElementById("item-list");
    const itemListCount = itemList.children.length;
    const item = document.createElement("li");
    item.classList.add("item");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = `todo${itemListCount + 1}`;
    input.name = input.id;

    const label = document.createElement("label");
    label.textContent = newTodo;
    label.htmlFor = input.name;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Todo";
    // deleteButton.addEventListener("click")

    item.append(input, label, deleteButton);
    itemList.append(item);
  }
});
