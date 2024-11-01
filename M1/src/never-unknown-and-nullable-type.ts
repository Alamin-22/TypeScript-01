{
  // never-unknown-and-nullable-type
  //   nullable Type

  const searchUserByName = (name: string | null) => {
    const searchResult = name ? "Searching" : "There is nothing to Search";
    console.log(searchResult);
  };

  //   searchUserByName("Mr. Mollik"); // if we provide any string the out put will be searching
  searchUserByName(null); // if we provide Null the out put will be There is nothing to search

  //   Unknown Type

  // -> Type unknown Means we dont know about the type. And ANy type of data can be provided as an argument
  const getSpeed = (value: unknown) => {
    // overall motive is if the type is Unknown We have to handle that Value by writing logic like JS.
    // It means we have to define what the type is and then we have to implement our logic on that value how we wanted to use
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The Current Speed is -> ${convertedSpeed} Kmh^-1`);
    }
  };
  getSpeed(250);

  //   Never Type
  //   Never type is used when some function will never gonna return.
  //   const throwError = (msg: string): never => {
  //     throw new Error(msg);
  //   };

  //   throwError("This is an Error");
}
