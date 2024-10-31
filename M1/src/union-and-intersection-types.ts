// Union Type (|) And Intersection (&)
// Union and Intersection is working like JS >> || and &&

type FrontEndDeveloper = "Wordpress Developer" | "JavaScript Developer";
type FullStackDeveloper = "Mern Stack Developer" | "Full Stack SQL Developer";

type Developer = FrontEndDeveloper | FullStackDeveloper;

const newDeveloper1: Developer = "Mern Stack Developer";
const newDeveloper2: Developer = "Full Stack SQL Developer";

type BloodGroup = "O+" | "O-" | "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-";

type User = {
  name: string;
  email: string;
  gender: "Male" | "Female";
  bloodGroup: BloodGroup;
  Address?: string;
};

const user1: User = {
  bloodGroup: "B+",
  gender: "Male",
  email: "kuddus@gmail.com",
  name: "KUDDUSAli",
  Address: "Bolmu na",
};
const user2: User = {
  bloodGroup: "B+",
  gender: "Male",
  email: "kuddus@gmail.com",
  name: "KUDDUSAli",
};

// Intersection (&)
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  jobTitle: string;
};

// Intersection type that combines both Person and Employee
type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
  name: "Md. Al Amin Mollik",
  age: 30,
  employeeId: 12345,
  jobTitle: "Software Developer",
};

console.log(employee);
