{
  // inheritance-in-oop

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.address = address;
      this.age = age;
    }
  }
  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
    getSleep(sleepHours: number) {
      console.log(`${this.name} will sleep for  ${sleepHours}`);
    }
  }

  const Student1 = new Student("Mr. Mollik", 20, "Mohammadpur");

  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    getSleep(sleepHours: number) {
      console.log(`${this.name} will sleep for  ${sleepHours}`);
    }

    teachSubject(sub: string) {
      console.log(`${this.name} will Teach  ${sub}`);
    }
  }

  const teacher1 = new Teacher(
    "Arifin Rahman Khan",
    40,
    "Kerani Gonj",
    "Assistant Professor"
  );
}
