{
  // Generic Types

  //   these are the basic system to declared a Type of array
  const StudentID: number[] = [1, 2, 3, 4];

  const NameOfStudents: string[] = ["Mr.", "Al", "Amin", "Mollik"];

  const booleanArray: boolean[] = [true, false, false, true];

  //   With the Help of Generic Type

  //   these are the basic system to declared a Type of array
  const StudentID1: Array<number> = [1, 2, 3, 4];

  const NameOfStudents1: Array<string> = ["Mr.", "Al", "Amin", "Mollik"];

  const booleanArray1: Array<boolean> = [true, false, false, true];

  //   We can also make a Reusable Array Type

  type GenericArray<T> = Array<T>;

  const StudentID2: GenericArray<number> = [1, 2, 3, 4];

  const NameOfStudents2: GenericArray<string> = ["Mr.", "Al", "Amin", "Mollik"];

  const booleanArray2: GenericArray<boolean> = [true, false, false, true];

  //   another example with Interface

  interface UserInterface {
    // this is not type alias, this is Interface and Interface and type alas work  kind of same  but there has a few differences
    name: string;
    age: number;
    isActive: boolean;
  }

  const NewUsers: GenericArray<UserInterface> = [
    {
      name: "Mr. Mollik",
      age: 20,
      isActive: true,
    },
    {
      name: "Emran Labu",
      age: 20,
      isActive: false,
    },
    {
      name: "Adiya Paul",
      age: 20,
      isActive: false,
      //  roll: 20, // => as we can se when I define the type of (array of object) with the specific Object Type , Then Typescript automatically suggested those keys and forbidden to insert new keys or unknown keys
    },
  ];
}
