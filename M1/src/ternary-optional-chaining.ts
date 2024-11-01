{
  // Ternary, optional chaining & nullish coalescing operator

  //   ordinary IF Else Statement
  const age = 20;

  if (age >= 18) {
    console.log("This is user is Adult");
  } else {
    console.log("This is user is not Adult");
  }

  //   same thing using Ternary Operator

  const isAdult = age >= 18 ? "Adult" : "Not Adult";

  //   console.log({isAdult});

  //   using Nullish coalescing operator
  // Nullish Coalescing operator will be work only for "Null And Undefined"
  const isAuthenticated = null; // if we use something else instead of Null or Undefined then this Nullish will never gonna work

  const result1 = isAuthenticated ?? "Guest"; // this is Nullish Coalescing using by "??";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";

  console.log({ result1 }, { result2 });

  //   using Optional Chining and Nullish Together

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user1: User = {
    name: "Md. Al Amin Mollik",
    address: {
      city: "Dhaka",
      presentAddress: "Mohammadpur",
      road: "Beribad Road",
    },
  };

  //   if we try to get any Object which has no value then it will give undefined.
  //   for this we can use Optional Chancing for this Case it is like JS "||" kind of same same but different
  const permanentAddress =
    user1?.address?.permanentAddress ?? // note that TO use Optional Chaining we have to provide "??" instead of "||" like js
    "This User is poor. He has no house to stay. We should provide him some food";

  console.log(permanentAddress);

  //
}
