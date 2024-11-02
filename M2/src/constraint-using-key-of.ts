{
  // constraint-using-key-of

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; /// we can achieve this same thing using key operator

  type OwnerWithKeyOperator = keyof Vehicle;

  //   as we can see both are working the same because they are same
  const MrMollik: Owner = "car";
  const EmranLabu: OwnerWithKeyOperator = "bike";
  const Aditiya: OwnerWithKeyOperator = "ship";

  //   another example

  //   Have to explore more about this example

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Mr. Mollik",
    age: 20,
    contact: 12123,
  };

  //   const person1 = getPropertyValue(user, );
}
