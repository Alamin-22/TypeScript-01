// on functions arguments We can define each type for each arguments at the same time we can define the out type as well. To Define output type we have to add ":" after the (arguments):"Expected Type" and then we have to  add the expected type Like this example

const NewFunction = (num1: number, num2: number): Number => num1 + num2;

//If any function is being used inside an object, is called "Method";

// Object >> function  >> Method

const richUser = {
  name: "Md. Al Amin Mollik",
  balance: 50,
  addBalance(balance: number): string {
    return `My New Balance is ->${this.balance + balance} `;
  },
};

// for array

const Arr: number[] = [1, 2, 3, 4, 5];
const newArr: number[] = Arr.map((el: number): number => Math.pow(el, 2)); // Squaring each element

console.log(newArr); // Output: [1, 4, 9, 16, 25]
