class BankAccount {
    constructor(initialBalance) {
      if (initialBalance < 0) {
        throw new Error("Начальный баланс не может быть отрицательным");
      }
      this.balance = initialBalance;
    }
  
    getBalance() {
      return this.balance;
    }
  
    
    deposit(amount) {
      if (amount <= 0) {
        throw new Error("Сумма депозита должна быть больше нуля");
      }
      this.balance += amount;
    }
  
    withdraw(amount) {
      if (amount <= 0) {
        throw new Error("Сумма снятия должна быть больше нуля");
      }
      if (amount > this.balance) {
        throw new Error("Недостаточно средств на счету");
      }
      this.balance -= amount;
    }
  }
 
  const account1 = new BankAccount(1000);
  
  console.log(account1.getBalance());
  
  account1.deposit(500);
  console.log(account1.getBalance());
  
  account1.withdraw(200);
  console.log(account1.getBalance());
  