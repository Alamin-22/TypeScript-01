{
  // 7-statics-in-oop

  class MathUtility {
    // Static property to hold the value of PI
    static PI: number = 3.14159;

    // Static method to calculate the area of a circle
    static calculateCircleArea(radius: number): number {
      return this.PI * radius * radius; // Uses static property PI
    }

    // Static method to calculate the circumference of a circle
    static calculateCircleCircumference(radius: number): number {
      return 2 * this.PI * radius; // Uses static property PI
    }
  }

  // Accessing the static property without creating an instance
  console.log(`Value of PI: ${MathUtility.PI}`); // Output: Value of PI: 3.14159

  // Calling static methods without creating an instance
  const radius = 5;
  const area = MathUtility.calculateCircleArea(radius);
  console.log(`Area of the circle with radius ${radius}: ${area}`); // Output: Area of the circle with radius 5: 78.53975

  const circumference = MathUtility.calculateCircleCircumference(radius);
  console.log(
    `Circumference of the circle with radius ${radius}: ${circumference}`
  ); // Output: Circumference of the circle with radius 5: 31.4159

  //   -------------------------------------------------------------------

  class Person {
    // Static property to count the number of Person instances
    static instanceCount: number = 0;

    // Instance properties
    name: string;
    age: number;

    // Constructor to initialize a new Person object
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;

      // Increment the static instance count each time a new instance is created
      Person.instanceCount++;
    }

    // Static method to get the current instance count
    static getInstanceCount(): number {
      return Person.instanceCount;
    }
  }

  // Creating new Person instances
  const person1 = new Person("Alice", 30);
  const person2 = new Person("Bob", 25);
  const person3 = new Person("Charlie", 35);

  // Accessing the static property to get the number of instances created
  console.log(
    `Number of Person instances created: ${Person.getInstanceCount()}`
  ); // Output: Number of Person instances created: 3

  // Accessing instance properties
  console.log(`${person1.name} is ${person1.age} years old.`); // Output: Alice is 30 years old.
  console.log(`${person2.name} is ${person2.age} years old.`); // Output: Bob is 25 years old.
}
