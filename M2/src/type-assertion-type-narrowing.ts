{
  // type Assertion >>> Means I have to provide a specific Type

  let data: any;

  data = "This is Mr. Mollik";

  // data. /// ->> like this if we don't provide any type then TypeScript will now provide any suggestion (after dot nation like data.) related to that value. Tp achieve those suggestion we have to provide specific Type like this (value as string )

  data as string; // ->> this is the  Example of Type Assertion. We can only use Type assertion when we are sure that this value will be Specified Type Like Number string etc.

  //  another example

  const KgToGm = (value: string | number) => {
    if (typeof value === "string") {
      const convertedValue = Number(value) * 1000;
      return `The Converted Value is => ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = KgToGm(5 as number); //=> this is type assertion
  const result2 = KgToGm("5" as string); //=> this is type assertion

  console.log({ result1 }, { result2 });

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message); //=> this is type assertion
  }
}
