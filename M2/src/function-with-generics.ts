{
  // Function with Generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const CreateArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  interface UserInterface {
    // this is not type alias, this is Interface and Interface and type alas work  kind of same  but there has a few differences
    name: string;
    age: number;
    isActive: boolean;
  }
  //   const res0 = createArray(true);
  const res1 = CreateArrayWithGeneric<boolean>(true);
  const res2 = CreateArrayWithGeneric<number>(34);
  const res3 = CreateArrayWithGeneric<UserInterface>({
    name: "Mr.Mollik",
    age: 20,
    isActive: true,
  });

  // Function with Tuple Generics
  const createArrayWithTuple = <T, U>(param1: T, param2: U): [T, U] => {
    return [param1, param2];
  };

  // Using the function with different types
  const tuple1 = createArrayWithTuple<string, number>("Hello", 42);
  const tuple2 = createArrayWithTuple<boolean, string>(true, "TypeScript");
  const tuple3 = createArrayWithTuple<UserInterface, string>(
    { name: "Alice", age: 25, isActive: true },
    "Instructor"
  );

  console.log(tuple1); // Output: ["Hello", 42]
  console.log(tuple2); // Output: [true, "TypeScript"]
  console.log(tuple3); // Output: [{ name: "Alice", age: 25, isActive: true }, "Instructor"]
}
