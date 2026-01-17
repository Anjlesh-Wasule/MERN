class BankAccount {
  #balance; //private variable

  constructor(initialAmount) {
    this.#balance = initialAmount;
  }

  set deposit(amount) {  // setter for balance
    if (amount > 0) {
      this.#balance += amount;
    } else {
      console.warn("Amount should be > 0");
    }
  }

  getBalance() {  // getter for balance
    return this.#balance;
  }
}


const account = new BankAccount(500);
console.log(account.getBalance());
account.deposit = 1000;
console.log(account.getBalance());
account.deposit = 0;
// account.#balance - cannot directly access private fields

// data cannot be modified directly
// changes happen in a controlled way
