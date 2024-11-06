{
  // spread operator and Destructuring

  const numArr = [1, 2, 3, 4, 5, 6];

  //   this is Spread Operator
  const numArrUpdated = [...numArr, 7, 8, 9, 10];

  console.log(numArrUpdated);

  //   we can also implement Spread Operator to copy object as well

  type PersonType = {
    name: string;
    Role: string;
    StudentOf: string;
    age: number;
    Company: string;
    Salary?: number; //=> it is also called nullable or Optional
  };

  //   external Type type for a object
  const person1: PersonType = {
    name: "Mr. Mollik",
    Role: "MERN Stack Developer",
    StudentOf: " Computer Science & Engineering",
    age: 20,
    Company: "Coder Squad",
  };

  const Person1Updated = { ...person1, salary: 1000000 };

  console.log(Person1Updated);

  //   rest Operator
}
