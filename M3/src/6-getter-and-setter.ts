{
  //    Getter setter
  class BankAccount {
    // by default it keep public
    public readonly id: number; // => we added readonly so that no one can change the id
    public name: string;
    // We have to follow the convention for private property which is _
    private _balance: number; // => Using private so that this _balance only remain accessible but not changeable from the outside
    //  Like the private there is another property called "protected". If we want to extend any class then we into that class to get private property we have to use Protected.
    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }
    // // creating a method to deposit new _balance from the inside
    // AddDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }
    // get_Balance() {
    //   return this._balance;
    // }

    //  we can achieve the same thing like function but using Getter and Setter. It work exactly the same but in different way

    get balance() {
      //=>getter
      return this._balance;
    }
    set deposit(amount: number) {
      // using setter
      this._balance = this._balance + amount;
    }
  }
  const EmransAccount = new BankAccount(1, "Emran", 100);
  //   EmransAccount._balance => by adding private Ts block to do something on _balance
  //   EmransAccount.AddDeposit(200); // => by adding this function we can only deposit amount

  console.log(
    "Emarn adding money to his account =>",
    (EmransAccount.deposit = 100)
  ); //=> now with the help of setter we don't have to call another function  but we can set amount  like property


  console.log("Emarns Total Balance is =>", EmransAccount.balance); //=> now with the help of getter we don't have to call another function but we can get the same thing like property
}
