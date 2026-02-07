document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     STORAGE
  ===================== */

  const STORAGE_KEYS = {
    todoApp: "todo-app",
  };

  class Store {
    constructor(key) {
      this.key = key;
    }

    save(data) {
      localStorage.setItem(this.key, JSON.stringify(data));
    }

    get() {
      const data = localStorage.getItem(this.key);
      return data ? JSON.parse(data) : null;
    }
  }

  const store = new Store(STORAGE_KEYS.todoApp);

  /* =====================
     CARD
  ===================== */

  class Card {
    constructor(title, dueDate, description) {
      this.title = title;
      this.dueDate = dueDate;
      this.description = description;
      this.id = crypto.randomUUID();
    }

    createCardElement() {
      const card = document.createElement("article");
      card.classList.add("card");

      const header = document.createElement("header");
      header.textContent = this.title;

      const body = document.createElement("section");

      const desc = document.createElement("p");
      desc.textContent = this.description;

      const due = document.createElement("p");
      due.textContent = this.dueDate;

      body.append(desc, due);
      card.append(header, body);

      return card;
    }
  }

  /* =====================
     LIST
  ===================== */

  let activeList = null;

  class List {
    #listElement;

    constructor(name) {
      this.name = name;
      this.id = crypto.randomUUID();
      this.cards = [];
      this.render();
    }

    render() {
      const list = document.createElement("section");
      list.classList.add("list");

      const header = document.createElement("header");
      const h2 = document.createElement("h2");
      h2.textContent = this.name;
      header.append(h2);

      const ul = document.createElement("ul");
      ul.classList.add("list-items");

      const footer = document.createElement("footer");
      const btn = document.createElement("button");
      btn.textContent = "New Card";

      btn.addEventListener("click", () => {
        activeList = this;
        cardDialog.classList.remove("hidden");
      });

      footer.append(btn);
      list.append(header, ul, footer);

      document.querySelector(".list-container").append(list);
      this.#listElement = list;
    }

    addCard(card) {
      this.cards.push(card);
      const li = document.createElement("li");
      li.append(card.createCardElement());
      this.#listElement.querySelector(".list-items").append(li);
    }
  }

  /* =====================
     BOARD
  ===================== */

  class Board {
    constructor(name, id = crypto.randomUUID()) {
      this.name = name;
      this.id = id;
      this.lists = [];
    }

    render() {
      const container = document.getElementById("boards-container");
      const li = document.createElement("li");
      li.textContent = this.name;
      li.id = this.id;
      container.append(li);
    }

    renderAddListButton() {
      const section = document.createElement("section");
      const btn = document.createElement("button");
      btn.textContent = "New List";

      btn.addEventListener("click", () => this.addNewList());

      section.append(btn);
      document.querySelector(".list-container").append(section);
    }

    addNewList() {
      const name = prompt("Enter list name");
      if (!name) return;

      const list = new List(name);
      this.lists.push(list);
    }
  }

  /* =====================
     APP
  ===================== */

  class TodoApp {
    constructor() {
      this.boards = [];
    }

    static getTodoApp() {
      const saved = store.get();
      const app = new TodoApp();

      if (saved?.boards?.length) {
        for (const b of saved.boards) {
          const board = new Board(b.name, b.id);
          board.render();
          app.boards.push(board);
        }
        app.boards[0].renderAddListButton();
      }

      return app;
    }

    addBoard(board) {
      this.boards.push(board);
      this.save();
    }

    save() {
      store.save({
        boards: this.boards.map(b => ({
          id: b.id,
          name: b.name,
        }))
      });
    }
  }

 
  const app = TodoApp.getTodoApp();

  /* =====================
     EVENTS
  ===================== */

  const addBoardBtn = document.getElementById("btn-new-board");
  const cardDialog = document.getElementById("new-card-dialog");
  const cardForm = document.getElementById("new-card-form");

  addBoardBtn.addEventListener("click", () => {
    const name = prompt("Enter board name");
    if (!name) return;

    const board = new Board(name);
    board.render();
    board.renderAddListButton();
    app.addBoard(board);
  });

  cardForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!activeList) return;

    const data = new FormData(cardForm);
    const card = new Card(
      data.get("title"),
      data.get("due-date"),
      data.get("description")
    );

    activeList.addCard(card);

    cardForm.reset();
    cardDialog.classList.add("hidden");
    activeList = null;
  });

  cardForm.addEventListener("reset", () => {
    cardDialog.classList.add("hidden");
    activeList = null;
  });

});
