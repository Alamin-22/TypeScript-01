{
  // utility-types
  // pick

  type Person = {
    name: string;
    age: string;
    email?: string;
    contactNo: number;
  };

  type NameAge = Pick<Person, "name" | "age">;

  //   omit == means delete

  type ContactInfo = Omit<Person, "name" | "age">;

  //   Required

  type FullFilUser = Required<Person>;

  //   Partial means optional
  type PersonalPartial = Partial<Person>;

  //   ReadOnly

  type personReadOnly = Readonly<Person>;

  //   record type

  type myObj = Record<string, string>;

  const obj1: myObj = { a: "asd", b: "1e" };
}
