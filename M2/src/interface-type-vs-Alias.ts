{
  // interface-type-vs-Type Alias

  type UserAlias = {
    // => this is how we can define a Object type with the help of type Alias
    name: string;
    age: number;
    isActive: boolean;
  };

  interface UserInterface {
    // this is not type alias, this is Interface and Interface and type alas work  kind of same  but there has a few differences
    name: string;
    age: number;
    isActive: boolean;
  }

  //=>We can do intersect  more type into Previous declared type with the help of both but in different way like below

  type userWithRole = UserAlias & { role: string }; // with this modification now userWithRole1 will ask for role property too.

  interface UserInterfaceWithRole extends UserInterface {
    // we can intersect more type in interface like this with help of "extends"
    role: string;
  }

  //   for Both UserWIthRole alias and UserInterfaceWithRoll will work same. But we have to define it differently

  //   We can also make interface using Type Alias with the help of "Extends"

  interface UserInterfaceWithRole extends UserAlias {
    // we can intersect more type in interface like this with help of "extends"
    role: string;
  }

  //   for this example we can use both of them (Interface or Type Alias)
  /*
   *for only Permeative we can use type alias
   *for objects  we can use interface or type alias
   */
  const user1: UserAlias = {
    name: "Mr.Mollik",
    age: 20,
    isActive: true,
  };

  //   For   Array ([])

  type RollNumber = number;

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [1, 2, 3, 4];
}
