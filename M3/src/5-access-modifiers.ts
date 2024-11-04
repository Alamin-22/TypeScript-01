{
  // 5-access-modifiers

  //   class BankAccount {
  //     // by default it keep public
  //     public readonly id: number; // => we added readonly so that no one can change the id
  //     public name: string;
  //     // We have to follow the convention for private property which is _
  //     private _balance: number; // => Using private so that this _balance only remain accessible but not changeable from the outside

  //     //  Like the private there is another property called "protected". If we want to extend any class then we into that class to get private property we have to use Protected.

  //     constructor(id: number, name: string, _balance: number) {
  //       this.id = id;
  //       this.name = name;
  //       this._balance = _balance;
  //     }
  //     // creating a method to deposit new _balance from the inside
  //     AddDeposit(amount: number) {
  //       this._balance = this._balance + amount;
  //     }

  //     get_Balance() {
  //       return this._balance;
  //     }
  //   }
  //   const EmransAccount = new BankAccount(1, "Emran", 50);
  //   //   EmransAccount._balance => by adding private Ts block to do something on _balance

  //   EmransAccount.AddDeposit(200); // => by adding this function we can only deposit amount

  //   console.log(EmransAccount);
  //   --------------------------------------------------

  class BankAccount {
    public readonly id: number; // The id property is readonly, meaning it cannot be changed after being set
    public name: string; // The name property is public
    protected _balance: number; // The _balance property is protected, accessible within the class and subclasses

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance; // Initialize the balance
    }

    // Method to add a deposit to the balance
    AddDeposit(amount: number) {
      this._balance += amount; // Increase the balance by the deposit amount
    }

    // Method to get the current balance
    get_Balance() {
      return this._balance; // Return the current balance
    }
  }

  // Subclass of BankAccount
  class SavingsAccount extends BankAccount {
    private interestRate: number; // Interest rate specific to the savings account

    constructor(
      id: number,
      name: string,
      balance: number,
      interestRate: number
    ) {
      super(id, name, balance); // Call the constructor of the parent class
      this.interestRate = interestRate; // Initialize the interest rate
    }

    // Method to apply interest to the balance
    applyInterest() {
      const interest = this._balance * this.interestRate; // Calculate interest
      this._balance += interest; // Add interest to the balance
    }
  }

  const emransAccount = new BankAccount(1, "Emran", 50);
  emransAccount.AddDeposit(200);
  console.log(`Account ID: ${emransAccount.id}`); // Output: Account ID: 1
  console.log(`Account Name: ${emransAccount.name}`); // Output: Account Name: Emran
  console.log(`Current Balance: ${emransAccount.get_Balance()}`); // Output: Current Balance: 250

  const emransSavingsAccount = new SavingsAccount(
    2,
    "Emran's Savings",
    1000,
    0.05
  ); // 5% interest rate
  emransSavingsAccount.applyInterest(); // Apply interest to the savings account
  console.log(`Savings Account ID: ${emransSavingsAccount.id}`); // Output: Savings Account ID: 2
  console.log(`Savings Account Name: ${emransSavingsAccount.name}`); // Output: Savings Account Name: Emran's Savings
  console.log(
    `Savings Account Balance after interest: ${emransSavingsAccount.get_Balance()}`
  ); // Output: Savings Account Balance after interest: 1050
}
