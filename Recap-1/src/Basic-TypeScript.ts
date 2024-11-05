{
  //Basic Types

  const age: number = 20;
  const Name: string = "mr. Mollik";
  const IsActive: boolean = true;

  //   for Arrays
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //   tuples
  const info: [number, string, boolean, object] = [
    1,
    "Mr. MOllik",
    true,
    { userId: 22, School: "RBHS" },
  ];

  //Objects in ts

  //   //   inline Type type for a object
  const person: {
    name: string;
    Role: string;
    StudentOf: string;
    age: number;
    Company: string;
  } = {
    name: "Mr. Mollik",
    Role: "MERN Stack Developer",
    StudentOf: " Computer Science & Engineering",
    age: 20,
    Company: "Coder Squad",
  };

  type PersonType = {
    name: string;
    Role: string;
    StudentOf: string;
    age: number;
    Company: string;
  };

  //   external Type type for a object
  const person2: PersonType = {
    name: "Mr. Mollik",
    Role: "MERN Stack Developer",
    StudentOf: " Computer Science & Engineering",
    age: 20,
    Company: "Coder Squad",
  };
}
