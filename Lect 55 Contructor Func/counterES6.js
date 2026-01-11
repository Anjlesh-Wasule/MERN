class Counter {
    constructor(counterId, incrementId, decrementId) {
      this.count = 0;

      this.counterElement = document.getElementById(counterId);
      this.incrementButton = document.getElementById(incrementId);
      this.decrementButton = document.getElementById(decrementId);

      this.registerEvents();
      this.renderCount();
    }

    increment() {
      this.count++;
      this.renderCount();
    }

    decrement() {
      this.count--;
      this.renderCount();
    }

    renderCount() {
      this.counterElement.textContent = this.count;
    }

    registerEvents() {
      this.incrementButton.addEventListener("click", () => this.increment());
      this.decrementButton.addEventListener("click", () => this.decrement());
    }
  }

  // Multiple independent instances
  const counter1 = new Counter("counterRef", "increment", "decrement");
  const counter2 = new Counter("counterRef2", "increment2", "decrement2");
