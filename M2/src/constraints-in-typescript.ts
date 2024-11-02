{
  // Function with Generic and Constraints
  const AddEmployeeToCompany = <T extends { contact: number }>(employee: T) => {
    const JobTitle = "Full Stack Developer";
    return {
      ...employee,
      JobTitle,
    };
  };

  // EmployeeType interface without contact initially
  interface EmployeeType {
    id: number;
    name: string;
    age?: number;
    role: string;
    email: string;
    isActive: boolean;
  }

  // Adding contact to meet the constraint
  const employee1 = AddEmployeeToCompany<EmployeeType & { contact: number }>({
    id: 1,
    name: "Mr. Mollik",
    email: "xyz@mollik.com",
    age: 20,
    isActive: true,
    role: "FrontEnd Engineer",
    contact: 1234567890, // Required to satisfy the constraint
  });

  // Resulting object with the new JobTitle
  console.log(employee1);
}
