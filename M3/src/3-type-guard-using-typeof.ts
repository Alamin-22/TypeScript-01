{
  // Type Guard

  type CustomType = string | number;

  const Add = (param1: CustomType, param2: CustomType): CustomType => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      // => this is called Type guard
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = Add(50, 30);
  const result2 = Add("50", 50);

  console.log({ result1 }, { result2 });

  interface UserType {
    name: string;
    email: string;
  }

  interface AdminUser extends UserType {
    role: "Admin";
    secretId: "2024@Admin";
  }

  const GetUser = (user: UserType | AdminUser) => {
    if ("role" in user && "secretId" in user) {
      console.log(
        `This User Name is ${user.name} and the role of the user is  ${user.role}`
      );
    } else {
      console.log(`The name of the user is ${user.name}`);
    }
  };

  const User: UserType = {
    name: "mr. Mollik",
    email: "xyz@gmail.com",
  };

  const SupperUser: AdminUser = {
    name: "mr. Mollik",
    email: "xyz@gmail.com",
    role: "Admin",
    secretId: "2024@Admin",
  };

//   const User1 = GetUser(User);
  const User2 = GetUser(SupperUser);

}
