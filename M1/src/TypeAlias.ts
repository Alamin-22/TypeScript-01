{
  // whenever We write Type Alias We have to Follow Naming Convention which is  "write type then then write Type name with Capital Letter (First Letter Should be Letter)"
  type Person = {
    id: number;
    name: string;
    age?: number; // we can also make any specific type Optional by using "?"
    gender: string;
  };

  type Employee = Person & {
    jobTitle: string;
    salary: number;
  };

  const employee1: Employee = {
    id: 1,
    name: "Md. Al Amin Mollik",
    gender: "Male",
    jobTitle: "Software Engineer",
    salary: 80000,
  };
  const employee2: Employee = {
    id: 2,
    name: "Tahidul Islam",
    gender: "Male",
    jobTitle: "Backend Engineer",
    salary: 80000,
  };

  //   SO we can also create Type Alias as we need
  type SumOperation = (sub1: number, sub2: number) => number;

  const SumOfSubjectMarks: SumOperation = (sub1, sub2) => sub1 + sub2;

  console.log(79, 60);
}
